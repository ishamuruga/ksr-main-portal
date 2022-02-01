import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FBLoginService } from 'projects/common-api/src/public-api';
import { VUser } from 'projects/common-model/src/public-api';
import { EventService, EVENTTYPE } from 'projects/common-services/src/lib/utility/event.service';
import { LayoutService } from 'projects/common-services/src/public-api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public layoutService:LayoutService,
              private fbLoginService:FBLoginService,
              private evntService:EventService,
              private router:Router) { }

  userName:string="-";

  vUser!:VUser;
  ngOnInit(): void {
    console.log("==================#######################");
    this.evntService.readEvent().subscribe((x:any)=>{
      if (x){
        if (x.event==EVENTTYPE.EVENT_LOGIN){
          this.vUser = x.data;
          this.userName = this.vUser.displayName + "";
          console.log("====" + this.userName);
        } else if (x.event==EVENTTYPE.EVENT_LOGIN) {
          this.layoutService.isAuthenticated = false;
          this.router.navigate(['./']);
        }
      }
    });
    console.log(this.userName);
    //this.vUser =  JSON.parse(sessionStorage.getItem("auth")+"");
    //console.log(JSON.stringify(this.vUser));
    //if (this.vUser){
    //  this.userName = this.vUser.displayName?.toString() + "";
    //}
    
    
    
  }

  handleLoggout(){
    this.evntService.raiseEvent(EVENTTYPE.EVENT_LOGGOUT,{id:1,name:"loggout"});
  }

}
