import { ConstantPool } from '@angular/compiler';
import { Injectable } from '@angular/core';
//import { AngularFireStorage } from '@angular/fire/storage/angular-fire-storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { throws } from 'assert';
import { promises } from 'dns';
import { EventService, EVENTTYPE } from 'projects/common-services/src/lib/utility/event.service';
//import { readAndCompressImage } from 'browser-image-resizer';
import { finalize } from 'rxjs';

const biresizer = require('browser-image-resizer');


@Injectable({
  providedIn: 'root'
})
export class FbStorageService {

  constructor(
    private storage: AngularFireStorage,
    private evntService:EventService) { }

  async uploadFile(data:any) {
    //console.log("....................1");
    const file = data.target.files[0];
    //console.log(file);
    //console.log("....................1.a");
    let resizedImage = await biresizer.readAndCompressImage(file, imageConfig);
    //console.log("....................2");
    const filepath = file.name;
    //console.log("....................3");
    const fileRef = this.storage.ref(filepath);
    ////console.log("....................4");
    //fileRef.getDownloadURL().subscribe(x=>{
    //  console.log(x);
    //});
    const task = this.storage.upload(filepath, resizedImage);
    //fileRef.getDownloadURL().subscribe(x=>{
    // console.log("==========================@@@@@@@@@");
    //  console.log(x);
    //  return Promise.resolve(x);
    //});
    
    
    
    
    
    //console.log(task);
    task.percentageChanges().subscribe((percentage) => {
      //this.uploadPercent = percentage;
      //console.log(percentage);
    });
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            //this.vol.profile = url;
            //console.log(url);
            //console.log("()()()()()()()()()()()()()()()()()()()()()()()()()");
            ////console.log(url);
            this.evntService.raiseEvent(EVENTTYPE.USER_PROFILE_URL,{loc:url});  
            //return Promise.resolve(url);
          });
        })
      )
      .subscribe();
  }
}


export const imageConfig = {
  quality: 0.2,
  width: 800,
  height: 600,
  autoRotate: true,
};