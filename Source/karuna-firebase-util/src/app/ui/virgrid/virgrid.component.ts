import { Component, Input, OnInit, Output } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { KVData, RowData } from 'src/app/mygi/Grid';



@Component({
  selector: 'app-virgrid',
  templateUrl: './virgrid.component.html',
  styleUrls: ['./virgrid.component.css']
})
export class VirgridComponent implements OnInit {

  @Input()
  rowData: any;

  deleteme: boolean = false;

  pSize = 10;

  @Input()
  datasource: string = "";

  @Input()
  colData: any;


  rows: RowData[] = [];

  public colCount: number = 0;

  pagination_clicked_count = 0;


  firstInResponse: any = [];
  lastInResponse: any = [];
  prev_strt_at: any = [];


  constructor(private store: AngularFirestore) { }

  ngOnInit(): void {

    if (this.deleteme) {
      throw new Error("Stop Runing");
    }

    console.log(this.datasource);

    this.colCount = this.colData.length;

    let itemsCollection = this.store.collection(this.datasource,
      ref => ref.limit(5).orderBy('id', 'asc')
    ).snapshotChanges().subscribe((response: any) => {

      if (!response.length) {
        console.log("No Data Available");
        return false;
      }
      this.rows = [];
      for (let item of response) {
        //console.log(item.payload.doc.data());
        this.populateData(item.payload.doc.data());
        console.log("====================");
      }

      this.firstInResponse = response[0].payload.doc;
      this.lastInResponse = response[response.length - 1].payload.doc;

      this.push_prev_startAt(this.firstInResponse);
      console.log("#####");
      console.log(this.firstInResponse);
      return;
    }, err => {
      console.log(err);
    }, () => {
      console.log("Finally....")
    });



    // for (const [key, value] of Object.entries(this.rowData)) {
    //   let obj:any = value;


    //   let tuple:RowData = new RowData();
    //   let kvs:KVData[] = [];
    //   console.log("================");
    //   for (const[key1, value1] of Object.entries(obj)){
    //     let kv:KVData = new KVData();


    //     kv.key = key1;
    //     kv.kvalue = value1+"";
    //     kvs.push(kv);



    //     //console.log(`==>${key1}: ${value1}`);
    //   }

    //   console.log(kvs);
    //   tuple.kv = kvs;
    //   this.rows.push(tuple);

    // }

    // console.log(JSON.stringify(this.rows));

  }

  push_prev_startAt(prev_first_doc: any) {
    this.prev_strt_at.push(prev_first_doc);
  }

  doPrev() {
    this.store.collection(this.datasource, ref => ref
      .orderBy('id', 'asc')
      .startAt(this.get_prev_startAt())
      .endBefore(this.firstInResponse)
      .limit(5))
      .get()
      .subscribe((response: any) => {
        // if (!response.docs.length) {
        //   console.log("No More Next....")
        //   return;
        // }
        this.firstInResponse = response.docs[0];
        this.lastInResponse = response.docs[response.docs.length - 1];
        this.rows = [];
        for (let item of response.docs) {
          this.populateData(item.data())
        }
        this.pagination_clicked_count--;
        
        this.pop_prev_startAt(this.firstInResponse);
        return;
      })
  }

  doNext() {
    this.store.collection(this.datasource, ref => ref
      .limit(5).orderBy('id', 'asc').startAfter(this.lastInResponse))
      .get()
      .subscribe((response: any) => {
        if (!response.docs.length) {
          console.log("No More Next....")
          return;
        }
        this.firstInResponse = response.docs[0];
        this.lastInResponse = response.docs[response.docs.length - 1];
        this.rows = [];
        this.pagination_clicked_count++;
        for (let item of response.docs) {
          this.populateData(item.data())
        }
        this.push_prev_startAt(this.firstInResponse);
        return;
      })
  }

  populateData(item: any) {
    let KVDatas: KVData[] = [];
    let tuple: RowData = new RowData();


    this.colData.map((x: any) => {
      console.log("=============>")
      console.log(x.name);
      for (const [key, value] of Object.entries(item)) {
        if (key === x.name) {
          let kv: KVData = new KVData();
          kv.key = key;
          kv.kvalue = value as string;
          KVDatas.push(kv);
          break;
        }
      }
    })

    //for (const[key, value] of Object.entries(item)){
    //console.log(`==>${key}: ${value}`);

    //}
    tuple.kv = KVDatas;
    this.rows.push(tuple);
    console.log(KVDatas);
  }

  get_prev_startAt() {
    if (this.prev_strt_at.length > (this.pagination_clicked_count + 1))
      this.prev_strt_at.splice(this.prev_strt_at.length - 2, this.prev_strt_at.length - 1);
    return this.prev_strt_at[this.pagination_clicked_count - 1];
  }

  pop_prev_startAt(prev_first_doc:any) {
    this.prev_strt_at.forEach((element:any) => {
      if (prev_first_doc.data().id == element.data().id) {
        element = null;
      }
    });
  }

  readableDate(time:any) {
    var d = new Date(time);
    return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
  }

}

