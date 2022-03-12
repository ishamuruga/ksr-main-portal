import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class FbCommonUtilService {

  constructor(private store: AngularFirestore) { }

  loadItems(dataSource:string,pSize:number){
      return  this.store.collection(dataSource,
        ref => ref.limit(pSize)
          .orderBy('id', 'asc')
      ).snapshotChanges();
  }

  getNext(dataSource:string,pSize:number,lastInResponse:any){
    return this.store.collection(dataSource, ref => ref
      .limit(pSize).orderBy('id', 'asc')
      .startAfter(lastInResponse))
      .get()
  }

  getPrev(dataSource:string,pSize:number,firstInResponse:any,get_prev_startAt:any){
    return this.store.collection(dataSource, ref => ref
      .orderBy('id', 'asc')
      .startAt(get_prev_startAt)
      .endBefore(firstInResponse)
      .limit(pSize))
      .get()
  }
}
