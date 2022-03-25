import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { LandingComponent } from './components/secured/landing/landing.component';
import { NewVolunteerRegistrationComponent } from './components/open/new-volunteer-registration/new-volunteer-registration.component';
import { CottonBallComponent } from './components/secured/cotton-ball/cotton-ball.component';
import { NewCottonBallRequestComponent } from './components/secured/new-cotton-ball-request/new-cotton-ball-request.component';
import { PendingCottonBallComponent } from './components/secured/pending-cotton-ball/pending-cotton-ball.component';
import { CompletedCottonBallComponent } from './components/secured/completed-cotton-ball/completed-cotton-ball.component';
import { PageInConstructionComponent } from './components/secured/page-in-construction/page-in-construction.component';
import { FundsRaisingComponent } from './components/secured/funds/funds-raising/funds-raising.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:LandingComponent},
  {path:'vol-registration',component : NewVolunteerRegistrationComponent},
  {path:'cotton-ball',component:CottonBallComponent},
  {path:'new-cotton-ball',component:NewCottonBallRequestComponent},
  {path:'pending-cotton-ball',component:PendingCottonBallComponent},
  {path:'completed-cotton-ball',component:CompletedCottonBallComponent},
  {path:'page-in-progress',component:PageInConstructionComponent},
  {path:'fund-raising',component:FundsRaisingComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
