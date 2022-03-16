import { DatePipe } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonUiComponentsComponent } from './common-ui-components.component';
import { FbGridComponent } from './components/fb-grid/fb-grid.component';



@NgModule({
  declarations: [
    CommonUiComponentsComponent,
    FbGridComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    CommonUiComponentsComponent,
    FbGridComponent
  ],providers:[
    DatePipe
  ]
})
export class CommonUiComponentsModule { }
