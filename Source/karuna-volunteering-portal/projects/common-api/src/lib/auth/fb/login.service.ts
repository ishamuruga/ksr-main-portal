import { Injectable } from '@angular/core';
import { VUser } from 'projects/common-model/src/public-api';
import { Observable } from 'rxjs';
import LoginManager from './login.manager';

import firebase from 'firebase/compat/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserCredential } from 'firebase/auth';

import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FBLoginService implements LoginManager {

  constructor(private angularFireAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router) {
    this.userData = angularFireAuth.authState;
  }

  userData!: Observable<firebase.User | null>;

  registration(user: VUser): Promise<any>  {
    console.log(user.id + "," + user.password);
    return this.angularFireAuth.createUserWithEmailAndPassword(user.id, user.password);
  }

  signIn(user: VUser): Promise<any> {
    console.log(user.id + "," + user.password);
    return this.angularFireAuth.signInWithEmailAndPassword(user.id, user.password);
  }

  signOut(): boolean {
    throw new Error('Method not implemented.');
  }

  
}
