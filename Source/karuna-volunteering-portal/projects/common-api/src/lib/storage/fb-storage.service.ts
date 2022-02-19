import { Injectable } from '@angular/core';
//import { AngularFireStorage } from '@angular/fire/storage/angular-fire-storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
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
    console.log("...FbStorageService");
    const file = data.target.files[0];
    console.log(file);
    console.log(file.name);
    let resizedImage = await biresizer.readAndCompressImage(file, imageConfig);
    const filepath = file.name;
    const fileRef = this.storage.ref(filepath);
    //fileRef.getDownloadURL().subscribe(x=>{
    //  console.log(x);
    //});
    const task = await this.storage.upload(filepath, resizedImage);
    //fileRef.getDownloadURL().subscribe(x=>{
    // console.log("==========================@@@@@@@@@");
    //  console.log(x);
    //  return Promise.resolve(x);
    //});
    
    console.log(fileRef.getDownloadURL());
    return fileRef.getDownloadURL();
    
    
    
    
    //console.log(task);
    //task.percentageChanges().subscribe((percentage) => {
      //this.uploadPercent = percentage;
    //});
    //task
    //  .snapshotChanges()
    //  .pipe(
    //    finalize(() => {
    //      fileRef.getDownloadURL().subscribe((url) => {
    //        //this.vol.profile = url;
    //        //console.log(url);
    //        //return Promise.resolve(url);
    //      });
    //    })
    //  )
    //  .subscribe();
  }
}


export const imageConfig = {
  quality: 0.2,
  width: 800,
  height: 600,
  autoRotate: true,
};