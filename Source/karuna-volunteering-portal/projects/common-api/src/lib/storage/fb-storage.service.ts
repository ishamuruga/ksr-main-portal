import { Injectable } from '@angular/core';
//import { AngularFireStorage } from '@angular/fire/storage/angular-fire-storage';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { readAndCompressImage } from 'browser-image-resizer';
import { finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FbStorageService {

  constructor(private storage: AngularFireStorage) { }

  async uploadFile(file:any) {
    //const file = event.target.files[0];
    let resizedImage = await readAndCompressImage(file, imageConfig);
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