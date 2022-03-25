import { Component, Inject, NgZone, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sucess-dialogue',
  templateUrl: './sucess-dialogue.component.html',
  styleUrls: ['./sucess-dialogue.component.css']
})
export class SucessDialogueComponent implements OnInit {

  message: string = "Error Occured!";
  res:string = "";
  confirmButtonText = "Yes";
  cancelButtonText = "Cancel";

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<SucessDialogueComponent>,
    private ngZone: NgZone,
    private router:Router) {
    //console.log(data);

    if (data) {
      this.message = data.message || this.message;
      this.res = data.loc;
      //console.log(this.message);
    }

  }
  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  onConfirmClick(): void {
    //console.log("closing..." + this.res);
    this.ngZone.run(() => {
      this.dialogRef.close(true);
      this.router.navigate([this.res]);
      //this.dialogRef.afterClosed().subscribe((res:string) => {
      //  this.router.navigate([res]);
      //})
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
