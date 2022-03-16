import { NgModule } from '@angular/core';
import { CommonServicesComponent } from './common-services.component';
import { SucessDialogueComponent } from './ui/sucess-dialogue/sucess-dialogue.component';

//import { MatDialog } from '@angular/material/dialog';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';


@NgModule({
  declarations: [
    CommonServicesComponent,
    SucessDialogueComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    MatSelectModule
  ],
  exports: [
    CommonServicesComponent,
    SucessDialogueComponent
  ]
})
export class CommonServicesModule { }
