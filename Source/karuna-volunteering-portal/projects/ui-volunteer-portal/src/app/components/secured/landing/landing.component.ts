import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService, EVENTTYPE } from 'projects/common-services/src/lib/utility/event.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}
