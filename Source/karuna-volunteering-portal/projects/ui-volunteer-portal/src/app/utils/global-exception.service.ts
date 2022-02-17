import { HttpErrorResponse } from '@angular/common/http';
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseError } from 'firebase/app';
import { ErrorDialogueComponent } from '../components/common/error-dialogue/error-dialogue.component';

@Injectable({
  providedIn: 'root'
})
export class GlobalExceptionService implements ErrorHandler {

  constructor(public dialog: MatDialog,
    private injector: Injector,
    private ngZone: NgZone) { }

  handleError(error: Error | HttpErrorResponse): void {
    console.log("=====================================handleError()")
    console.log(error);
    //console.log(error.message);
    //console.log(error.toString());

    let message = error.message;

    if (!error.message.includes("Firebase")) {
      //message = "Invalid Login,Please check your username & password";
      this.ngZone.run(() => {
        this.dialog.open(ErrorDialogueComponent, {
          data: {
            message: message,
          }
        });
      });
    }


    console.error(error);
    //throw new Error('Method not implemented.');
  }
}
