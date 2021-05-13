import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Apollo, gql } from "apollo-angular";

const ADD_HOTEL = gql`
  mutation createHotel($hotel_id: ID!, $hotel_name: String!, $street: String!, $city: String!, $postal_code: String!, $price: Float!, $email: String!, $user_id: Float!) {
    createHotel(hotel_id: $hotel_id, hotel_name: $hotel_name, street: $street, city: $city, postal_code: $postal_code, price: $price, email: $email, user_id: $user_id) {
      hotel_id
      hotel_name
    }
  }
`;

let hotel_id = 0;


@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css']
})

export class AddHotelComponent implements OnInit {

  // hotel_id = 0;
  hotel_name = "";
  street = "";
  city = "";
  postal_code = "";
  price = 0;
  email = "";
  user_id = 1;
  query: any;

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit(): void {
  }

  onSubmit(loginForm: NgForm): void {
    console.log(loginForm.value);

    hotel_id = Math.floor((Math.random() * 100) + 1);
    this.hotel_name = loginForm.value.hotel_name;
    this.street = loginForm.value.street;
    this.postal_code = loginForm.value.postal_code;
    this.price = loginForm.value.price;
    this.city = loginForm.value.city;
    this.email = loginForm.value.email;
    this.user_id = Math.floor((Math.random() * 100) + 1);


    this.query = this.apollo
    .mutate({
      mutation: ADD_HOTEL,
      variables: {
        hotel_id:hotel_id,
        hotel_name: this.hotel_name,
        street: this.street,
        city: this.city,
        postal_code: this.postal_code,
        price: this.price,
        email: this.email,
        user_id: this.user_id
      }
    })
    .subscribe( (data) => {
      console.log(data);
      this.router.navigate(['/home'])
    })
  }

}
