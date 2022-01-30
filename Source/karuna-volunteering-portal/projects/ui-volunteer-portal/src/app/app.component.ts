import { Component } from '@angular/core';
import { LayoutService } from 'projects/common-services/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  constructor(public layoutService:LayoutService) { }
  
  title = 'ui-volunteer-portal';
}
