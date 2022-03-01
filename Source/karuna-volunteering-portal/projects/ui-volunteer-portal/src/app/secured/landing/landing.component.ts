import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, EVENTTYPE } from 'projects/common-services/src/lib/utility/event.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor(private evntService:EventService,private route:Router) { }

  ngOnInit(): void {
    this.evntService.readEvent().subscribe((x:any)=>{
      if (x.event== EVENTTYPE.SUB_MENU_CLICK){
        this.route.navigate([x.data.loc]);
      }
    })
  }

}
