import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardService } from './_models/auth-gaurd.service';
import { TripDetailComponent } from './trip-detail/trip-detail.component';
import { AddTripComponent } from './add-trip/add-trip.component';


const routes: Routes = [
    {path:"", redirectTo:"home", pathMatch:"full"},
  	{path:"home", component:HomeComponent},

    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent }, 
    { path: 'logout', component: LogoutComponent }, 	
  	  
    // { path: '**', redirectTo: '' },
    { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService]},
    { path: 'trip/detail', component: TripDetailComponent, canActivate:[AuthGuardService]},
    { path: 'trip/new', component: AddTripComponent, canActivate:[AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
