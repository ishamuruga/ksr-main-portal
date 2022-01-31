import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { ContentAreaComponent } from './components/layout/content-area/content-area.component';
import { LoginComponent } from './components/auth/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GlobalExceptionService } from './utils/global-exception.service';
import { ErrorDialogueComponent } from './components/common/error-dialogue/error-dialogue.component';
import { CommonApiModule } from 'projects/common-api/src/public-api';
import { LandingComponent } from './secured/landing/landing.component';
import { NewVolunteerRegistrationComponent } from './components/open/new-volunteer-registration/new-volunteer-registration.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ContentAreaComponent,
    LoginComponent,
    LandingComponent,
    ErrorDialogueComponent,
    NewVolunteerRegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    CommonApiModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: GlobalExceptionService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
