import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'id101200299-comp3133-assig2';

  isValid = false;

  ngOnInit(): void {
    let val = localStorage.getItem('isValidUser');

    // if the user is logged in, redirect the 'login' button to home
    if(val != null && val == 'true') {
      this.isValid = true;
    }
    else {
      this.isValid = false;
    }
  }

}
