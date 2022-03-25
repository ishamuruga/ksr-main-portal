import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonUiComponentsComponent } from './common-ui-components.component';
import { FbGridComponent } from './components/fb-grid/fb-grid.component';
import { CardFundRaisingComponent } from './components/card-fund-raising/card-fund-raising.component';



@NgModule({
  declarations: [
    CommonUiComponentsComponent,
    FbGridComponent,
    CardFundRaisingComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CommonUiComponentsComponent,
    FbGridComponent,
    CardFundRaisingComponent
  ],providers:[
    DatePipe
  ]
})
export class CommonUiComponentsModule { }
