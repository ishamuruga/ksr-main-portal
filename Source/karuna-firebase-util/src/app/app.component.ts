import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { countries } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'karuna-firebase-util';

  constructor(private db:AngularFirestore){

  }
  ngOnInit(): void {
    //this.createCountries();
  }

  createCountries(){
    countries.map(x=>{

      console.log(x);
      this.db.collection("country").add(x);
    })
    console.log("Completed........")
  }
  
}
