import { Component, OnInit } from '@angular/core';
import { LayoutService } from 'projects/common-services/src/public-api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public layoutService:LayoutService) { }

  ngOnInit(): void {
  }

}
