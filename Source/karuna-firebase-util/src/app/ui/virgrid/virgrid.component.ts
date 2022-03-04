import { Component, Input, OnInit, Output } from '@angular/core';
import { KVData, RowData } from 'src/app/mygi/Grid';



@Component({
  selector: 'app-virgrid',
  templateUrl: './virgrid.component.html',
  styleUrls: ['./virgrid.component.css']
})
export class VirgridComponent implements OnInit {

  @Input()
  rowData:any;

  @Input()
  colData:any;


  rows:RowData[]=[]; 

  public colCount:number = 0;

  constructor() { }

  ngOnInit(): void {
    this.colCount = this.colData.length;
    
    for (const [key, value] of Object.entries(this.rowData)) {
      let obj:any = value;
      

      let tuple:RowData = new RowData();
      let kvs:KVData[] = [];
      console.log("================");
      for (const[key1, value1] of Object.entries(obj)){
        let kv:KVData = new KVData();
        

        kv.key = key1;
        kv.kvalue = value1+"";
        kvs.push(kv);
        
        

        //console.log(`==>${key1}: ${value1}`);
      }
      
      console.log(kvs);
      tuple.kv = kvs;
      this.rows.push(tuple);

    }

    console.log(JSON.stringify(this.rows));
    
  }

  

}

