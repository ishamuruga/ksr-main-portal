import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FbCommonUtilService } from 'projects/common-api/src/public-api';
import { EventService, EVENTTYPE } from 'projects/common-services/src/public-api';
import { timestamp } from 'rxjs';
import { KVData, RowData } from '../../model/Grid';

@Component({
  selector: 'lib-fb-grid',
  templateUrl: './fb-grid.component.html',
  styleUrls: ['./fb-grid.component.css']
})
export class FbGridComponent implements OnInit {

  @Input()
  datasource: string = "";

  @Input()
  colData: any;

  @Input()
  title:string="";

  @Input()
  rowData:any;

  @Input()
  id:string="";

  @Input()
  filter:any[]=[];

  isEmpty:boolean = false;
  
  pSize = 5;
  firstInResponse: any;
  lastInResponse: any;
  rows: any[] = [];
  nextDisabled = true;
  prevDisabled = true;

  pagination_clicked_count = 0;

  prev_strt_at:any[]=[];

  constructor(private fbUtilService: FbCommonUtilService,
              private datePipe:DatePipe,private evtService:EventService ) { }

  ngOnInit(): void { 
    //console.log(this.datasource);
    //console.log(this.colData);
    //console.log(this.id);
    this.isEmpty = false;
    //console.log(this.isEmpty);
    this.loadItems();
    //console.log(this.isEmpty);
  }

  loadItems() {
    this.nextDisabled = false;
    this.prevDisabled = true;
    //console.log(this.datasource);
    let itemsCollection = this.fbUtilService.loadItems2(this.datasource,this.pSize,this.id,this.filter).subscribe((response: any) => {

      if (!response.length) {
        //console.log("No Data Available");
        this.nextDisabled = true;
        this.prevDisabled = true;
        this.isEmpty = true;
        return false;
      }
      this.firstInResponse = response[0].payload.doc;
      this.lastInResponse = response[response.length - 1].payload.doc;

      

      this.push_prev_startAt(this.firstInResponse);

      this.rows = [];
      this.pagination_clicked_count = 0;
      for (let item of response) {
        this.populateData(item.payload.doc.data());
      }

      return;
    }, err => {
      console.log(err);
    }, () => {
      console.log("Finally....")
    });
  }

  next() {
    this.prevDisabled = false;
    this.fbUtilService.getNext(this.datasource,this.pSize,this.lastInResponse,this.id,this.filter).subscribe((response: any) => {
        if (!response.docs.length) {
          //console.log("No More Next....")
          this.nextDisabled = true;
          
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
        this.pagination_clicked_count++;

        this.push_prev_startAt(this.firstInResponse);

        //console.log(tempCounter + "," + this.pSize);
        
        
        return;
      })
  }

  prev() {
    if (this.get_prev_startAt() == undefined) {
      this.prevDisabled = true;
      this.nextDisabled = false;
      return;
    }

    this.fbUtilService.getPrev(this.datasource,this.pSize,this.firstInResponse,this.get_prev_startAt(),this.id,this.filter).subscribe((response: any) => {
        //console.log("......"+response.docs.length);
        if (!response.docs.length) {
           //console.log("No More Prev....")
           this.prevDisabled = true;
           this.nextDisabled = false;
           return;
        }
        this.firstInResponse = response.docs[0];
        this.lastInResponse = response.docs[response.docs.length - 1];
        this.rows = [];
        for (let item of response.docs) {
          //console.log("******");
          //console.log(item);
          this.populateData(item.data())
        }
        this.pagination_clicked_count--;
 
        this.nextDisabled = false;

        this.pop_prev_startAt(this.firstInResponse);

        return;
      }, err => {
        //console.log("=======Error");
        //console.log(err);
      }, () => {
        //console.log("Finally.........");
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

          switch (x.dtype) {
            case "date":
              kv.kvalue = this.datePipe.transform(value+"",'yyyy-MMM-dd') + "";
              break;
          
            default:
              kv.kvalue = value as string;
              break;
          }
        
          
          
          KVDatas.push(kv);
          break;
        }
      }
    })
    tuple.kv = KVDatas;
    this.rows.push(tuple);
  }

  push_prev_startAt(prev_first_doc:any) {
    this.prev_strt_at.push(prev_first_doc);
  }

  pop_prev_startAt(prev_first_doc:any) {
    this.prev_strt_at.forEach(element => {
      if (prev_first_doc.data().id == element.data().id) {
        element = null;
      }
    });
  }

  get_prev_startAt() {
    if (this.prev_strt_at.length > (this.pagination_clicked_count + 1))
      this.prev_strt_at.splice(this.prev_strt_at.length - 2, this.prev_strt_at.length - 1);
    return this.prev_strt_at[this.pagination_clicked_count - 1];
  }

  back() {
    this.evtService.raiseEvent(EVENTTYPE.SUB_MENU_CLICK,{loc:'cotton-ball'})
  }

}
