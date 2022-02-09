import { Injectable } from '@angular/core';
import { VUser } from 'projects/common-model/src/public-api';
import { BehaviorSubject, Observable } from 'rxjs';
import LoginManager from './login.manager';

import firebase from 'firebase/compat/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User, UserCredential } from 'firebase/auth';

import { Router } from '@angular/router';
import { EventService, EVENTTYPE } from 'projects/common-services/src/lib/utility/event.service';

@Injectable({
  providedIn: 'root'
})
export class FBLoginService implements LoginManager {

  constructor(private angularFireAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private evtService:EventService) {
    this.userData = angularFireAuth.authState;

  }

  userData!: Observable<firebase.User | null>;

  registration(user: VUser): Promise<any> {
    console.log(user.id + "," + user.password);
    return this.angularFireAuth.createUserWithEmailAndPassword(user.id, user.password);
  }



  async signIn(user: VUser): Promise<any> {
    console.log(user.id + "," + user.password);

    let result = await this.angularFireAuth.signInWithEmailAndPassword(user.id, user.password);

    let data: any = result.user?.toJSON();

    let vuser: VUser = new VUser();
    vuser.id = result.user?.email + "";
    let disName = result.user?.providerData[0]?.displayName;
    disName = disName ? disName : "User-X";
    vuser.displayName = disName;
    vuser.loggedInTS = new Date();
    vuser.accessToken = data.stsTokenManager.accessToken;
    vuser.refreshToken = data.stsTokenManager.refreshToken;
    this.evtService.raiseEvent(EVENTTYPE.EVENT_LOGIN,vuser);
    return Promise.resolve(vuser);

  }

  async signOut():Promise<boolean> {
    await this.angularFireAuth.signOut();
    sessionStorage.removeItem('auth');

    return Promise.resolve(true);
  }


  async googleSignin(): Promise<any> {
    console.log("=========================1");
    const provider = new firebase.auth.GoogleAuthProvider();
    console.log("=========================2");
    const credential = await this.angularFireAuth.signInWithPopup(provider);
    console.log("=========================3");
    console.log(credential);

    if (credential == null){
      Promise.reject();
    }

    console.log("=========================4");
    
    let user = credential.user;
    let data:any = { 
      uid: user!.uid, 
      email: user!.email, 
      displayName: user!.displayName, 
      photoURL: user!.photoURL
    };
    console.log("=========================5");
    console.log(data);
    console.log("=========================6");

    //let dd= this.updateUserData(credential.user);



    return Promise.resolve(data);

  }

  private updateUserData(user: any) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);

    const data:any = { 
      uid: user.uid, 
      email: user.email, 
      displayName: user.displayName, 
      photoURL: user.photoURL
    } 

    

    userRef.set(data, { merge: true })

    return data;
  }




}
