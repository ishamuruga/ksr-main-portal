import { Component, OnInit } from '@angular/core';
import { LoginService } from 'projects/common-services/src/public-api';

@Component({
  selector: 'app-pending-cotton-ball',
  templateUrl: './pending-cotton-ball.component.html',
  styleUrls: ['./pending-cotton-ball.component.css']
})
export class PendingCottonBallComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  cotBallTitle = "OnGoing / Pending Cotton Ball Request"

  id:string=this.loginService.fetchEmailFromStorage();

  filter=[
    {id:1,key:"status",value:"new"},
    {id:2,key:"id",value:this.id}
  ]

  colData = [
    {id:0,position:1,dtype:"string",sort:false,name:"id",display:"#"},
    {id:1,position:2,dtype:"number",sort:false,name:"cbCount",display:"Count #"},
    {id:2,position:3,dtype:"string",sort:false,name:"cbColor",display:"Color"},
    {id:3,position:1,dtype:"date",sort:false,name:"createdDate",display:"Created Date"},
    {id:4,position:1,dtype:"date",sort:false,name:"plannedCompleteDate",display:"Planned Complete Date"},
    {id:5,position:1,dtype:"date",sort:false,name:"plannedShippedDate",display:"Planned Shipped Date"},
    {id:6,position:1,dtype:"date",sort:false,name:"shippedDate",display:"Shipped Date"},
    {id:7,position:3,dtype:"string",sort:false,name:"shippingproviders",display:"Logistics"},
    {id:8,position:3,dtype:"date",sort:false,name:"ts",display:"TimeStamp"}
  ]

  ds = "cotton-ball";

  ngOnInit(): void {
  }

}
