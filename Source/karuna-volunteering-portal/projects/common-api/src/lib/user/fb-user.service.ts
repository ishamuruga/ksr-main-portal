import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Volunteer } from 'projects/common-model/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class FbUserService {

  constructor(private db: AngularFirestore) { }

  public fetchUserNameById(email:string){
    console.log(email);
    return this.db.collection<Volunteer[]>('volunteers',ref => ref.where('email', '==', email)).valueChanges();
  }

  


}
