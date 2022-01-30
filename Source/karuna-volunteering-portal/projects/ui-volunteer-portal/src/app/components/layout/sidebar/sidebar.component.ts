import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'projects/common-services/src/public-api';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public layoutService:LayoutService) { }

  ngOnInit(): void {
  }

}
