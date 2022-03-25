import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MainMenu, SubMenu,menus } from 'projects/common-model/src/public-api';
import { EventService, EVENTTYPE } from 'projects/common-services/src/lib/utility/event.service';
import { LayoutService } from 'projects/common-services/src/public-api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private mMenu!:MainMenu;

  public sMenus!:SubMenu[];

  constructor(public layoutService:LayoutService,private evntService:EventService,private route:Router) { 
    this.evntService.readEvent().subscribe((x:any)=>{
      if (x){
        if (x.event==EVENTTYPE.MAIN_MENU_CLICK){
          //console.log(x.data);
          if (x.data){
            this.mMenu = x.data;
            this.sMenus = this.mMenu.sMenu;
            //console.log(this.mMenu.sMenu);
          } else {
            this.sMenus = menus[0].sMenu;
          }
          
        } else if (x.event== EVENTTYPE.SUB_MENU_CLICK){
          this.route.navigate([x.data.loc]);
        }
      }
    });
  }

  ngOnInit(): void {

  }

  doNavigate(url:string) {
    //console.log("url..." + url);
    this.evntService.raiseEvent(EVENTTYPE.SUB_MENU_CLICK,{loc:url});
  }

}
