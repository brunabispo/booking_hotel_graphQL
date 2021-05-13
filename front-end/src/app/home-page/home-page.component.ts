import { Component, OnInit } from '@angular/core';

import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";

const GET_HOTELS = gql`
  query Hotel {
    getHotels{
      hotel_name,
      city,
      price
    }
  }
`;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  hotels: any[];

  constructor(private apollo: Apollo) { }

  getHotels(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_HOTELS,
    }).valueChanges;
  }

  ngOnInit(): void {
    this.getHotels().subscribe((data) => {
      this.hotels = data.data.getHotels;
      console.log(this.hotels);
    })
  }
}
