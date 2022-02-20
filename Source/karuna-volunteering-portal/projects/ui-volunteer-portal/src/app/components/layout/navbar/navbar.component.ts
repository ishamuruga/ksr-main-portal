import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { throws } from 'assert';
import { FBLoginService, FbUserService } from 'projects/common-api/src/public-api';
import { MainMenu, SubMenu, VUser } from 'projects/common-model/src/public-api';
import { EventService, EVENTTYPE } from 'projects/common-services/src/lib/utility/event.service';
import { MenuManagerService } from 'projects/common-services/src/lib/utility/menu-manager.service';
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
              private menuService:MenuManagerService,
              private router:Router) { }

  userName:string="-";
  pUrl!:string;

  menus:MainMenu[]=[];

  vUser!:VUser;

  ngOnInit(): void {
    console.log("==================#######################");
    this.evntService.raiseEvent(EVENTTYPE.MAIN_MENU_CLICK,null);
    this.evntService.readEvent().subscribe((x:any)=>{
      if (x){
        if (x.event==EVENTTYPE.EVENT_LOGIN){
          this.vUser = x.data;
          console.log(this.vUser);
          this.userName = this.vUser.displayName + "";
          this.pUrl = this.vUser.photoURL + "";
          console.log("====" + this.userName);
        } else if (x.event==EVENTTYPE.EVENT_LOGGOUT) {
          this.layoutService.isAuthenticated = false;
          this.router.navigate(['./']);
        } else if (x.event == EVENTTYPE.USER_PROFILE_URL) {
          console.log(x.data.loc);
        }
      }
    });
    
    console.log(this.userName);

    this.menus = this.menuService.getAllMenus();
    //this.vUser =  JSON.parse(sessionStorage.getItem("auth")+"");
    //console.log(JSON.stringify(this.vUser));
    //if (this.vUser){
    //  this.userName = this.vUser.displayName?.toString() + "";
    //}
    
    
    
  }

  handleLoggout(){
    this.evntService.raiseEvent(EVENTTYPE.EVENT_LOGGOUT,{id:1,name:"loggout"});
  }

  handleMenuClick(m:any) {
    this.evntService.raiseEvent(EVENTTYPE.MAIN_MENU_CLICK,m);
  }

}
