import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from "@angular/router";
import { Apollo, gql } from "apollo-angular";
import { Observable } from "rxjs";

const GET_USER = gql`
  query User($username: String!) {
    getUserByID(user_id: $user_id) {
      username
      password
    }
  }
`;

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private apollo: Apollo) { }

  getUserByID(username: any): Observable<any> {
    return this.apollo.watchQuery<any> ({
      query: GET_USER,
      variables: {
        username: username,
      },
    }).valueChanges;
  }

  ngOnInit(): void {
    let val = localStorage.getItem('isValidUser');

    // if the user is logged in, redirect the 'login' button to home
    if(val != null && val == 'true') {
        this.router.navigate(['/home']);
    }
  }

  onSubmit(loginForm: NgForm): void {
    let username = loginForm.value.username;
    let password = loginForm.value.password;

    // this.getUserByID(username)
    // .subscribe((data) => {
    //   console.log(data);
    //   localStorage.setItem('isValidUser', 'true');
    //   this.router.navigate(['/home'])
    // })



    // Call API/services to validate the user from backend
    if(username == "admin" && password == "admin") {
      localStorage.setItem('isValidUser', 'true');
      // sessionStorage.setItem('isValidUser', 'true');

      // Redirect to home page
      this.router.navigate(['/home'])
    }
    else {
      localStorage.setItem('isValidUser', 'false');
      alert('username or password invalid')
    }
  }
}
