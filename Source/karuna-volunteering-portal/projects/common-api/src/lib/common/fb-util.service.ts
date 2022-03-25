import { registerLocaleData } from '@angular/common';
import { dashCaseToCamelCase } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
//import { of, Subject, switchMap } from 'rxjs';
//import { collection, Firestore, query, QueryConstraint, where } from "firebase/firestore";
import {Query } from '@angular/fire/firestore';
import { Country } from 'projects/common-model/src/public-api';




@Injectable({
  providedIn: 'root'
})
export class FbCommonUtilService {

  constructor(private store: AngularFirestore) { }

  // loadItems(dataSource: string, pSize: number, owner: string, status: any) {
  //   console.log(owner);
  //   return this.store.collection(dataSource,
  //     ref => ref
  //       .where('id', '==', owner)
  //       .limit(pSize)
  //     //         .orderBy('ts', 'asc')
  //   ).snapshotChanges();
  // }

  loadItems2(dataSource: string, pSize: number, owner: string, filter: any) {
    //console.log(filter);
    return this.store.collection(dataSource,(ref:any) => {
      
      filter.map((x:any) => {
        //console.log("Filters")
        ref = ref.where(x.key,'==',x.value)
        return x;
      })
      return ref.limit(pSize);
    }).snapshotChanges();    
  }


  getNext(dataSource: string, pSize: number, lastInResponse: any, owner: any, filter: any) {
    
    return this.store.collection(dataSource,(ref:any) => {
      
      filter.map((x:any) => {
        //console.log("Filters")
        ref = ref.where(x.key,'==',x.value)
        return x;
      })

      ref = ref.startAfter(lastInResponse);

      return ref.limit(pSize);
    }).get();
    
    
    // return this.store.collection(dataSource, ref => ref
    //   .where('id', '==', owner)
    //   .limit(pSize)
    //   //    .orderBy('ts', 'desc')
    //   .startAfter(lastInResponse))
    //   .get()
  }

  getPrev(dataSource: string, pSize: number, firstInResponse: any, get_prev_startAt: any, owner: string, filter: any) {
    
    
    return this.store.collection(dataSource,(ref:any) => {
      
      filter.map((x:any) => {
        //console.log("Filters")
        ref = ref.where(x.key,'==',x.value)
        return x;
      })

      ref = ref.startAt(get_prev_startAt).endBefore(firstInResponse);

      return ref.limit(pSize);
    }).get();

    
    // return this.store.collection(dataSource, ref => ref
    //   .where('id', '==', owner)
    //   //    .orderBy('ts', 'desc')
    //   .startAt(get_prev_startAt)
    //   .endBefore(firstInResponse)
    //   .limit(pSize))
    //   .get()
  }

  getReferenceData(dataSource:string){
     return this.store.collection(dataSource).snapshotChanges();
  }

  getCottonBallCount(id:string,filter:any[]) {
    console.log(id);
    console.log(filter);
    return this.store.collection("cotton-ball",(ref:any)=>{
      filter.map((y:any) => {
        console.log(y.key + "," + y.value);
        ref = ref.where(y.key,'==',y.value);
        return y;
      });

      return ref;
    }).snapshotChanges();
      
    //   filter.map((x:any) => {
    //     console.log("Filters")
    //     ref = ref.where(x.key,'==',x.value)
    //this.store.collection("cotton-ball",ref =>{

    //});
    //     return x;
    //   })
    // }).snapshotChanges();  
  }

}
