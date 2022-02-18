import { Injectable } from '@angular/core';
//import { AngularFireStorage } from '@angular/fire/storage/angular-fire-storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { promises } from 'dns';
//import { readAndCompressImage } from 'browser-image-resizer';
import { finalize } from 'rxjs';

const biresizer = require('browser-image-resizer');


@Injectable({
  providedIn: 'root'
})
export class FbStorageService {

  constructor(private storage: AngularFireStorage,private evntService:EventService) { }

  async uploadFile(data:any) {
    const file = data.target.files[0];
    let resizedImage = await biresizer.readAndCompressImage(file, imageConfig);
    const filepath = file.name;
    const fileRef = this.storage.ref(filepath);
    const task = this.storage.upload(filepath, resizedImage);
    task.percentageChanges().subscribe((percentage) => {
      //this.uploadPercent = percentage;
    });
    task
      .snapshotChanges()
      .pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe((url) => {
            //this.vol.profile = url;
            //console.log(url);
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