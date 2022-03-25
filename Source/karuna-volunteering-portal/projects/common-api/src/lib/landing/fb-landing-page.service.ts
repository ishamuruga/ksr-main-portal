import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FbLandingPageService {

  constructor(private store:AngularFirestore) {  }

  public getCottonBallCollections(){
    this.store.collection("cotton-ball")
  }
}
