import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MygiComponent } from './mygi/mygi.component';

import { AgGridModule } from 'ag-grid-angular';
import { VirgridComponent } from './ui/virgrid/virgrid.component';
import { Virgrid2Component } from './virgrid2/virgrid2.component';
import { AngTweetComponent } from './ang-tweet/ang-tweet.component';

import { NgxTwitterWidgetsModule } from 'ngx-twitter-widgets';
import { NgxTweetModule } from 'ngx-tweet';

@NgModule({
  declarations: [
    AppComponent,
    MygiComponent,
    VirgridComponent,
    Virgrid2Component,
    AngTweetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AgGridModule.withComponents(null),
    NgxTwitterWidgetsModule,
    NgxTweetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
