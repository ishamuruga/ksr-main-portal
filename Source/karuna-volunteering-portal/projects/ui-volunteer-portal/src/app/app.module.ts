import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

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
import { LandingComponent } from './components/secured/landing/landing.component';
import { NewVolunteerRegistrationComponent } from './components/open/new-volunteer-registration/new-volunteer-registration.component';
import { ToastrModule } from 'ngx-toastr';
import { CottonBallComponent } from './components/secured/cotton-ball/cotton-ball.component';
import { NewCottonBallRequestComponent } from './components/secured/new-cotton-ball-request/new-cotton-ball-request.component';
import { PendingCottonBallComponent } from './components/secured/pending-cotton-ball/pending-cotton-ball.component';
import { CommonUiComponentsModule } from 'projects/common-ui-components/src/public-api';
import { CompletedCottonBallComponent } from './components/secured/completed-cotton-ball/completed-cotton-ball.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    NavbarComponent,
    ContentAreaComponent,
    LoginComponent,
    LandingComponent,
    ErrorDialogueComponent,
    NewVolunteerRegistrationComponent,
    CottonBallComponent,
    NewCottonBallRequestComponent,
    PendingCottonBallComponent,
    CompletedCottonBallComponent,
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
    MatSelectModule,
    CommonApiModule,
    ToastrModule.forRoot(),
    CommonUiComponentsModule
  ],
  providers: [
     { provide: ErrorHandler, useClass: GlobalExceptionService }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
