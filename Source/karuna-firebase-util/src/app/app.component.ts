import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { countries,cottonBall,funds } from './data';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'karuna-firebase-util';

  
  ds = "cotton-ball";

  rowData = [
    {id:1,name:"baba",email:'baba@gmail.com'},
    {id:2,name:"arunachalam",email:'arunachalam@gmail.com'},
    {id:3,name:"padaiyappa",email:'padaiyappa@gmail.com'},
    {id:4,name:"PettaVelan",email:'pvelan@gmail.com'},
  ];

  colData = [
    {id:0,position:1,dt:"number",sort:false,name:"id"},
    {id:1,position:3,dt:"string,email",sort:true,name:"email"},
    {id:2,position:2,dt:"string",sort:true,name:"name"}
  ]


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

  createFunds(){
    funds.map(x=>{

      console.log(x);
      this.db.collection("funds-manager").add(x);
    })
    console.log("Completed........")
  }
  
  createCBall(){
    cottonBall.map(x=>{

      console.log(x);
      this.db.collection("cotton-ball").add(x);
    })
    console.log("Completed........")
  }
  
}
