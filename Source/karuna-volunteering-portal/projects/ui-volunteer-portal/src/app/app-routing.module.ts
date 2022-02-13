import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { LandingComponent } from './secured/landing/landing.component';
import { NewVolunteerRegistrationComponent } from './components/open/new-volunteer-registration/new-volunteer-registration.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:LandingComponent},
  {path:'vol-registration',component : NewVolunteerRegistrationComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
