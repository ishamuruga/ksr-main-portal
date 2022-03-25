import { Component, Input, OnInit } from '@angular/core';
import FundRaising from '../../model/FundRaising';

@Component({
  selector: 'lib-card-fund-raising',
  templateUrl: './card-fund-raising.component.html',
  styleUrls: ['./card-fund-raising.component.css']
})
export class CardFundRaisingComponent implements OnInit {

  @Input()
  datas: FundRaising[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
