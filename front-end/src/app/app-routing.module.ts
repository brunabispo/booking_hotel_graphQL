import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { AddUserComponent } from './add-user/add-user.component';
import { BookHotelComponent } from './book-hotel/book-hotel.component';
import { BookingsPageComponent } from './bookings-page/bookings-page.component';

import { AuthGuard } from './guards/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { LogoutPageComponent } from './logout-page/logout-page.component';
import { RegisterPageComponent } from './register-page/register-page.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  { path: 'home', component: HomePageComponent, canActivate: [AuthGuard]},
  { path: 'login', component: LoginPageComponent},
  { path: 'logout', component: LogoutPageComponent},
  { path: 'register', component: RegisterPageComponent},
  { path: 'bookings', component: BookingsPageComponent, canActivate: [AuthGuard]},
  { path: 'bookHotel', component: BookHotelComponent, canActivate: [AuthGuard]},
  { path: 'addHotel', component: AddHotelComponent, canActivate: [AuthGuard]},
  { path: 'users', component: UsersPageComponent, canActivate: [AuthGuard]},
  { path: 'addUser', component: AddUserComponent, canActivate: [AuthGuard]},
  { path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
