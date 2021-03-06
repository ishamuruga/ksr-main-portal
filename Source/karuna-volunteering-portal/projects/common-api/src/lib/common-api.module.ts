import { NgModule } from '@angular/core';
import { CommonApiComponent } from './common-api.component';
import { FIREBASE_CONFIG } from './config/firebase';

import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireAnalyticsModule } from '@angular/fire/compat/analytics';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';


@NgModule({
  declarations: [
    CommonApiComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(FIREBASE_CONFIG),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAnalyticsModule,
    AngularFireAuthModule
  ],
  exports: [
    CommonApiComponent
  ]
})
export class CommonApiModule { }
