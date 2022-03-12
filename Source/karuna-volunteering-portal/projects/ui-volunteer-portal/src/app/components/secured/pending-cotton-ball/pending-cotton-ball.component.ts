import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending-cotton-ball',
  templateUrl: './pending-cotton-ball.component.html',
  styleUrls: ['./pending-cotton-ball.component.css']
})
export class PendingCottonBallComponent implements OnInit {

  constructor() { }

  cotBallTitle = "OnGoing / Pending Cotton Ball Request"

  colData = [
    {id:0,position:1,dt:"string",sort:false,name:"id"},
    {id:1,position:2,dt:"number",sort:false,name:"cbCount"},
    {id:2,position:3,dt:"string",sort:false,name:"cbColor"},
    {id:3,position:1,dt:"date",sort:false,name:"createdDate"},
    {id:4,position:1,dt:"date",sort:false,name:"plannedCompleteDate"},
    {id:5,position:1,dt:"date",sort:false,name:"plannedShippedDate"},
    {id:6,position:1,dt:"date",sort:false,name:"shippedDate"},
    {id:7,position:3,dt:"string",sort:false,name:"shippingproviders"},
    {id:8,position:3,dt:"date",sort:false,name:"ts"}
  ]

  ds = "cotton-ball";

  ngOnInit(): void {
  }

}
