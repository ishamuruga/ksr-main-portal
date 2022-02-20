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
import { FbUserService } from 'projects/common-api/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class FBLoginService implements LoginManager {

  constructor(private angularFireAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
    private evtService: EventService,
    private fbUserService: FbUserService) {
    this.userData = angularFireAuth.authState;

  }

  userData!: Observable<firebase.User | null>;

  registration(user: VUser): Promise<any> {
    console.log(user.id + "," + user.password);
    return this.angularFireAuth.createUserWithEmailAndPassword(user.id, user.password);
  }



  async signIn(user: VUser): Promise<any> {
    console.log(user.id + "," + user.password);
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    let result = await this.angularFireAuth.signInWithEmailAndPassword(user.id, user.password);
    console.log(result);


    let data: any = result.user?.toJSON();
    console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    console.log(data)
    let vuser: VUser = new VUser();
    vuser.id = result.user?.email + "";

    //let disName = "";








    //disName = disName ? disName : "User-X";
    //vuser.displayName = disName;
    vuser.loggedInTS = new Date();
    vuser.accessToken = data.stsTokenManager.accessToken;
    vuser.refreshToken = data.stsTokenManager.refreshToken;
    this.fbUserService.fetchUserNameById(vuser.id).subscribe((x: any) => {
      console.log("+++++++++++++++++++++");
      console.log(x[0].firstname);
      vuser.photoURL = "https://pro.propeller.in/assets/images/avatar-icon-40x40.png";
      if (x[0].profile){
        vuser.photoURL = x[0].profile;
      }
      let disName:string = x[0].firstname;
      vuser.displayName = "User-X";
      if (disName){
        if (disName.length>=10) {
          vuser.displayName = disName.substring(0,10) + "..";
        } else {
          vuser.displayName = disName;
        }
      }
      
      console.log(vuser);
      this.evtService.raiseEvent(EVENTTYPE.EVENT_LOGIN, vuser);
      
    })

    return Promise.resolve(vuser);


    // this.angularFireAuth.signInWithEmailAndPassword(user.id, user.password).then(result=>{
    //   let data: any = result.user?.toJSON();
    //   console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
    //   console.log(data)
    //   let vuser: VUser = new VUser();
    //   vuser.id = result.user?.email + "";
    //   let disName = result.user?.providerData[0]?.displayName;
    //   disName = disName ? disName : "User-X";
    //   vuser.displayName = disName;
    //   vuser.loggedInTS = new Date();
    //   vuser.accessToken = data.stsTokenManager.accessToken;
    //   vuser.refreshToken = data.stsTokenManager.refreshToken;
    //   this.evtService.raiseEvent(EVENTTYPE.EVENT_LOGIN,vuser);
    //   //return Promise.resolve(vuser);
    // }).catch(err=>{
    //   console.log("ERRRRR");
    //   console.log(err);
    //   throw new Error("IN VAALLLLID LOGIN");
    //   //return Promise.reject("ERROR In Login");
    // }).finally(()=>{ 
    //   console.log("Login Completed");
    // })






  }

  async signOut(): Promise<boolean> {
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

    if (credential == null) {
      Promise.reject();
    }

    console.log("=========================4");

    let user = credential.user;
    let data: any = {
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

    const data: any = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    }



    userRef.set(data, { merge: true })

    return data;
  }




}
