import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { GraphQlModule } from "./graphql.module";
import { HttpClientModule } from "@angular/common/http";
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import { FormsModule } from "@angular/forms";
import { RegisterPageComponent } from './register-page/register-page.component';
import { BookingsPageComponent } from './bookings-page/bookings-page.component';
import { BookHotelComponent } from './book-hotel/book-hotel.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { UsersPageComponent } from './users-page/users-page.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    LogoutPageComponent,
    HomePageComponent,
    RegisterPageComponent,
    BookingsPageComponent,
    BookHotelComponent,
    AddHotelComponent,
    UsersPageComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQlModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
