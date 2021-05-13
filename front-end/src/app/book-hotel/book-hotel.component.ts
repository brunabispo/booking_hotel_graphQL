import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";

const ADD_BOOKING = gql`
mutation bookHotel($booking_id: ID!, $hotel_name: String!, $username: String!, $booking_date: String!, $booking_start: String!, $booking_end: String!) {
  bookHotel(booking_id: $booking_id, hotel_name: $hotel_name, username: $username, booking_date: $booking_date, booking_start: $booking_start, booking_end: $booking_end) {
    booking_id
    hotel_name
  }
}
`;

const GET_HOTELS = gql`
  query Hotel {
    getHotels{
      hotel_name,
    }
  }
`;


const GET_USERS = gql`
  query User {
    getUsers{
      username
    }
  }
`;

let booking_id = 0;

@Component({
  selector: 'app-book-hotel',
  templateUrl: './book-hotel.component.html',
  styleUrls: ['./book-hotel.component.css']
})
export class BookHotelComponent implements OnInit {
  hotel_name = "";
  username = "";
  booking_start = "";
  booking_end = "";
  booking_date = "";
  // booking_id = 0;
  query: any;

  hotels: any[];
  users: any[];

  constructor(private router: Router, private apollo: Apollo) { }

  getHotels(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_HOTELS,
    }).valueChanges;
  }

  getUsers(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_USERS,
    }).valueChanges;
  }

  ngOnInit(): void {
    this.getHotels().subscribe((data) => {
      this.hotels = data.data.getHotels;
      console.log(this.hotels);
    })

    this.getUsers().subscribe((data) => {
      this.users = data.data.getUsers;
      console.log(this.users);
    })
  }

  onSubmit(loginForm: NgForm): void {
    console.log(loginForm.value);

    this.hotel_name = loginForm.value.hotel_name;
    this.username = loginForm.value.username;
    this.booking_start = loginForm.value.start_date;
    this.booking_end = loginForm.value.end_date;
    this.booking_date = loginForm.value.booking_date;
    booking_id = Math.floor((Math.random() * 100) + 1);;


    this.query = this.apollo
    .mutate({
      mutation: ADD_BOOKING,
      variables: {
        booking_id: booking_id,
        hotel_name: this.hotel_name,
        username: this.username,
        booking_date: this.booking_date,
        booking_start: this.booking_start,
        booking_end: this.booking_end
      }
    })
    .subscribe( (data) => {
      console.log(data);
      this.router.navigate(['/bookings'])
    })
  }
}
