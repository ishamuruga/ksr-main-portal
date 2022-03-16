import { Component, OnInit } from '@angular/core';
import { AngularFirestore, Query } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-fb-where',
  templateUrl: './fb-where.component.html',
  styleUrls: ['./fb-where.component.css']
})
export class FbWhereComponent implements OnInit {

  filter=[
    {id:1,key:"status",value:"new"},
    {id:2,key:"id",value:'abi@abi.com'}
  ]

  constructor(private store:AngularFirestore) { }

  ngOnInit(): void {
  }

  async fetch(){
    // let data = this.store.collection("cotton-ball",
    //   ref => ref.where('status',"==","new").limit(5)
    // ).snapshotChanges();

    let data = this.store.collection("cotton-ball",ref => {

        let q:Query = ref;

        this.filter.map(x=>{
          q= q.where(x.key,'==',x.value);
        })

        

        

        return q.limit(5);

       }).snapshotChanges();

    console.log(data.subscribe(x=>{
      console.log(x);
    }));

  }

}
