import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService, EVENTTYPE } from 'projects/common-services/src/public-api';

@Component({
  selector: 'app-cotton-ball',
  templateUrl: './cotton-ball.component.html',
  styleUrls: ['./cotton-ball.component.css']
})
export class CottonBallComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private evntService: EventService, private route: Router) { }

  ngOnInit(): void {

    //this.evntService.readEvent().subscribe((x: any) => {
    //  if (x.event == EVENTTYPE.SUB_MENU_CLICK) {
    //    this.route.navigate([x.data.loc]);
    //  }
    //})

  }

  async onSubmit() { }

  doNavigate(url: string) {
    console.log("url..." + url);
    this.evntService.raiseEvent(EVENTTYPE.SUB_MENU_CLICK, { loc: url });
  }

}
