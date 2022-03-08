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

  pSize = 5;

  @Input()
  datasource: string = "";

  @Input()
  colData: any;

  prevDisabled: boolean = true;
  nextDisabled: boolean = false;

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
      ref => ref.limit(this.pSize)
      .orderBy('id', 'asc')
    ).snapshotChanges().subscribe((response: any) => {
      if (!response.length) {
        console.log("No Data Available");
        return false;
      }
      this.rows = [];
      for (let item of response) {
        this.populateData(item.payload.doc.data());
      }

      this.firstInResponse = response[0].payload.doc;
      this.lastInResponse = response[response.length - 1].payload.doc;

      this.push_prev_startAt(this.firstInResponse);
      return;
    }, err => {
      console.log(err);
    }, () => {
      console.log("Finally....")
    });
  }

  push_prev_startAt(prev_first_doc: any) {
    this.prev_strt_at.push(prev_first_doc);
  }

  doPrev() {
    console.log("++++++++");
    if (this.get_prev_startAt() == undefined) {
      this.prevDisabled = true;
      this.nextDisabled = false;
      return;
    }
    this.store.collection(this.datasource, ref => ref
      .orderBy('id', 'asc')
      .startAt(this.get_prev_startAt())
      .endBefore(this.firstInResponse)
      .limit(this.pSize))
      .get()
      .subscribe((response: any) => {
        console.log("......"+response.docs.length);
        if (!response.docs.length) {
           console.log("No More Prev....")
           this.prevDisabled = true;
           this.nextDisabled = false;
           return;
         }
        this.firstInResponse = response.docs[0];
        this.lastInResponse = response.docs[response.docs.length - 1];
        this.rows = [];
        let tempCounter = 0;
        for (let item of response.docs) {
          this.populateData(item.data())
          tempCounter++;
        }
        console.log(tempCounter);
        this.pagination_clicked_count--;

        this.nextDisabled = false;


        this.pop_prev_startAt(this.firstInResponse);
        return;
      }, err => {
        console.log("=======Error");
        console.log(err);
      }, () => {
        console.log("Finally.........");
      })
  }

  doNext() {
    this.store.collection(this.datasource, ref => ref
      .limit(this.pSize).orderBy('id', 'asc')
      .startAfter(this.lastInResponse))
      .get()
      .subscribe((response: any) => {
        if (!response.docs.length) {
          console.log("No More Next....")
          this.nextDisabled = true;
          return;
        }
        this.firstInResponse = response.docs[0];
        this.lastInResponse = response.docs[response.docs.length - 1];
        this.push_prev_startAt(this.firstInResponse);
        this.rows = [];
        this.pagination_clicked_count++;
        let tempCounter = 0;
        for (let item of response.docs) {
          this.populateData(item.data())
          tempCounter++;
        }
        console.log(tempCounter + "," + this.pSize);
        if (tempCounter < this.pSize) {
          console.log("&&");
          this.nextDisabled = true;
        }

        this.prevDisabled = false;

        
        return;
      })
  }

  populateData(item: any) {
    let KVDatas: KVData[] = [];
    let tuple: RowData = new RowData();
    this.colData.map((x: any) => {
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
    tuple.kv = KVDatas;
    this.rows.push(tuple);
  }

  get_prev_startAt() {
    if (this.prev_strt_at.length > (this.pagination_clicked_count + 1))
      this.prev_strt_at.splice(this.prev_strt_at.length - 2, this.prev_strt_at.length - 1);
    return this.prev_strt_at[this.pagination_clicked_count - 1];
  }

  pop_prev_startAt(prev_first_doc: any) {
    this.prev_strt_at.forEach((element: any) => {
      if (prev_first_doc.data().id == element.data().id) {
        element = null;
      }
    });
  }

  readableDate(time: any) {
    var d = new Date(time);
    return d.getDate() + "/" + d.getMonth() + "/" + d.getFullYear();
  }



}

