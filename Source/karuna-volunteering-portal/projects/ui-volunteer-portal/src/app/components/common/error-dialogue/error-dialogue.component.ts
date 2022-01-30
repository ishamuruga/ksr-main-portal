import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-error-dialogue',
  templateUrl: './error-dialogue.component.html',
  styleUrls: ['./error-dialogue.component.css']
})
export class ErrorDialogueComponent implements OnInit {
  message: string = "Error Occured!";
  confirmButtonText = "Yes";
  cancelButtonText = "Cancel";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<ErrorDialogueComponent>,
    private ngZone: NgZone) {
    console.log(data);

    if (data) {
      this.message = data.message || this.message;
      console.log(this.message);
    }

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  onConfirmClick(): void {
    console.log("closing...")
    this.ngZone.run(() => {
      this.dialogRef.close(true);
    });
  }

  //  constructor(
  //     @Inject(MAT_DIALOG_DATA) public data: DialogData,
  //     public dialogRef: MatDialogRef<ErrorDialogueComponent>
  //  ) {}

  //  onCancel(): void {
  //   console.log("Dialogue Close clicked...");
  //   this.dialogRef.close();
  // }

}
