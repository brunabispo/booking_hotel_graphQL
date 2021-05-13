import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Apollo, gql } from "apollo-angular";

const ADD_USER = gql`
mutation createUser($user_id: ID!, $username: String!, $password: String!, $email: String!) {
  createUser(user_id: $user_id, username: $username, password: $password, email: $email) {
    user_id
    username
  }
}
`;

let user_id = 0;

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  username = "";
  password = "";
  email = "";
  // user_id = 0;
  query: any;

  constructor(private router: Router, private apollo: Apollo) { }

  ngOnInit(): void {

  }

  getRandomID() {
    return Math.floor(Math.random())
  }

  onSubmit(loginForm: NgForm): void {
    console.log(loginForm.value);

    this.username = loginForm.value.username;
    this.password = loginForm.value.password;
    this.email = loginForm.value.email;
    user_id = Math.floor((Math.random() * 100) + 1);;

    this.query = this.apollo
    .mutate({
      mutation: ADD_USER,
      variables: {
        user_id: user_id,
        username: this.username,
        password: this.password,
        email: this.email
      }
    })
    .subscribe( (data) => {
      console.log(data);
      this.router.navigate(['/login']);
    })

  }

}
