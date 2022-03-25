import { Component, OnInit } from '@angular/core';
import { FbCommonUtilService } from 'projects/common-api/src/public-api';
import FundRaising from 'projects/common-ui-components/src/lib/model/FundRaising';

@Component({
  selector: 'app-funds-raising',
  templateUrl: './funds-raising.component.html',
  styleUrls: ['./funds-raising.component.css']
})
export class FundsRaisingComponent implements OnInit {

  datas: FundRaising[] = [];

  constructor(private fbCommonService: FbCommonUtilService) { }

  ngOnInit(): void {
    this.fbCommonService.getReferenceData("funds-manager").subscribe(res => {

      for (let item of res) {
        this.datas.push(item.payload.doc.data() as FundRaising);
      }

    })
  }

};



