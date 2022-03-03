import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { CottonBall } from 'projects/common-model/src/public-api';

@Injectable({
  providedIn: 'root'
})
export class FBCottonBallService {

  constructor(private storage: AngularFirestore) { }


  async saveCottonBall(cBall:CottonBall){
    // return this.storage
    //   .collection('cotton-ball')
    //   .add(JSON.parse(JSON.stringify(cBall)));
    
    const {id} = await this.storage
         .collection('cotton-ball')
         .add(JSON.parse(JSON.stringify(cBall)));
  
    return id;

  }
}
