import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";

const GET_USERS = gql`
  query User {
    getUsers{
      user_id,
      username,
      email
    }
  }
`;

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {

  users: any[];

  constructor(private apollo: Apollo) { }

  getUsers(): Observable<any> {
    return this.apollo.watchQuery<any>({
      query: GET_USERS,
    }).valueChanges;
  }

  ngOnInit(): void {
    this.getUsers().subscribe((data) => {
      this.users = data.data.getUsers;
      console.log(this.users);
    })
  }
}
