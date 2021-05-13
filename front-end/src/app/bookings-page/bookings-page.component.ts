import { Component, OnInit } from '@angular/core';

import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";

const GET_BOOKINGS = gql`
  query Booking {
    getBookings{
      booking_id,
      hotel_name,
      username,
      booking_date,
      booking_start,
      booking_end
    }
  }
`;

@Component({
  selector: 'app-bookings-page',
  templateUrl: './bookings-page.component.html',
  styleUrls: ['./bookings-page.component.css']
})
export class BookingsPageComponent implements OnInit {

  bookings: any[];

  constructor(private apollo: Apollo) { }

  getBookings(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_BOOKINGS,
    }).valueChanges;
  }

  ngOnInit(): void {
    this.getBookings().subscribe((data) => {
      this.bookings = data.data.getBookings;
      console.log(this.bookings);
    })
  }


}
