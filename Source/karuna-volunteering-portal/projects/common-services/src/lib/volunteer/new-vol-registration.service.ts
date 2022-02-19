import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Volunteer } from 'projects/common-model/src/public-api';
import { FbStorageService } from '../../../../common-api/src/lib/storage/fb-storage.service';

@Injectable({
  providedIn: 'root'
})
export class NewVolRegistrationService {

  constructor(private auth: AngularFireAuth,
    private db: AngularFirestore,
    private storage: FbStorageService) { }
    
  signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }


  saveVolunteer(volunteer: Volunteer) {
    volunteer.id = this.db.createId();
    console.log(volunteer);
    return this.db
      .collection('volunteers')
      .add(JSON.parse(JSON.stringify(volunteer)));
  }

  uploadFile(data:any){
    console.log("...NewVolRegistrationService");
      
    return this.storage.uploadFile(data);
  }

}
