import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FbCommonUtilService {

  constructor(private store: AngularFirestore) { }

  loadItems(dataSource:string,pSize:number,owner:string){
    console.log(owner);
      return this.store.collection(dataSource,
        ref => ref
          .where('id', '==', owner)
          .limit(pSize)
//          .orderBy('ts', 'asc')
      ).snapshotChanges();
  }
  

  getNext(dataSource:string,pSize:number,lastInResponse:any,owner:string){
    return this.store.collection(dataSource, ref => ref
      .where('id', '==', owner)
      .limit(pSize)
  //    .orderBy('ts', 'desc')
      .startAfter(lastInResponse))
      .get()
  }

  getPrev(dataSource:string,pSize:number,firstInResponse:any,get_prev_startAt:any,owner:string){
    return this.store.collection(dataSource, ref => ref
      .where('id', '==', owner)
  //    .orderBy('ts', 'desc')
      .startAt(get_prev_startAt)
      .endBefore(firstInResponse)
      .limit(pSize))
      .get()
  }

 
}
