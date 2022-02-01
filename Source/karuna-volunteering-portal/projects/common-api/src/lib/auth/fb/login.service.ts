import { Injectable } from '@angular/core';
import { VUser } from 'projects/common-model/src/public-api';
import { BehaviorSubject, Observable } from 'rxjs';
import LoginManager from './login.manager';

import firebase from 'firebase/compat/app';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserCredential } from 'firebase/auth';

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

    // this.angularFireAuth.signInWithEmailAndPassword(user.id, user.password).then(x=>{
    //   let y = x as firebase.auth.UserCredential;
    //   let data:any  = y.user?.toJSON();

    //   let vuser:VUser = new VUser();
    //   vuser.id = y.user?.email + "";
    //   vuser.displayName = y.user?.providerData[0]?.displayName + "";
    //   vuser.loggedInTS = new Date();
    //   vuser.accessToken = data.stsTokenManager.accessToken;
    //   vuser.refreshToken = data.stsTokenManager.refreshToken;


    //   return Promise.resolve(vuser);    


    // });
  }

  signOut(): boolean {
    sessionStorage.removeItem('auth');
    return true;
  }


}
