import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FbCommonUtilService } from 'projects/common-api/src/public-api';
import { EventService, EVENTTYPE } from 'projects/common-services/src/lib/utility/event.service';
import { LoginService } from 'projects/common-services/src/public-api';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  id:string=this.loginService.fetchEmailFromStorage();

  cottonBallNew:number=0;
  cottonBallCompleted:number=0;

  filterOpen:any[]=[
    {id:1,key:"status",value:"new"},
    {id:2,key:"id",value:this.id}
  ];

  filterClosed:any[]=[
    {id:1,key:"status",value:"completed"},
    {id:2,key:"id",value:this.id}
  ];

  
  constructor(private fbUtilService:FbCommonUtilService,
    private loginService:LoginService,private eventService:EventService) { }

  ngOnInit(): void {
    //this.id=this.loginService.fetchEmailFromStorage();
    this.fbUtilService.getCottonBallCount(this.id,this.filterOpen).subscribe(x=>{
      this.cottonBallNew = x.length?x.length:0;
      console.log(x.length);
    })
    this.fbUtilService.getCottonBallCount(this.id,this.filterClosed).subscribe(x=>{
      this.cottonBallCompleted = x.length?x.length:0;
      console.log(x.length);
    })
  }

  public goToHome() {
    this.eventService.raiseEvent(EVENTTYPE.SUB_MENU_CLICK,{loc:'/'});
  }

}
