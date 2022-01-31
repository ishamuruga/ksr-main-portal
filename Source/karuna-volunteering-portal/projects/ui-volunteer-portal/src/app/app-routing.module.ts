import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { LandingComponent } from './secured/landing/landing.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:LandingComponent},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
