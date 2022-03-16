import { Component, NgZone, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CottonBall } from 'projects/common-model/src/public-api';
import { CottonBallService } from 'projects/common-services/src/lib/cotton-ball/cotton-ball.service';
import { EventService, EVENTTYPE, LoginService, SucessDialogueComponent } from 'projects/common-services/src/public-api';

@Component({
  selector: 'app-new-cotton-ball-request',
  templateUrl: './new-cotton-ball-request.component.html',
  styleUrls: ['./new-cotton-ball-request.component.css']
})
export class NewCottonBallRequestComponent implements OnInit {

  submitted: boolean = false;
  id:string="";
  displayName:string="";

  form: FormGroup = new FormGroup({
    emailid: new FormControl(''),
    ts: new FormControl(''),
    shippingproviders: new FormControl(''),
    shippedDate: new FormControl(''),
    awb: new FormControl(''),
    cbCount: new FormControl(''),
    cbColor: new FormControl(''),
    plannedCompleteDate: new FormControl(''),
    plannedShippedDate: new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, 
    private evntService: EventService,
    private loginService:LoginService,
    private cbService:CottonBallService,
    public dialog: MatDialog,
    private ngZone: NgZone,
    private router:Router) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      emailid: [''],
      ts: [''],
      shippingproviders: [''],
      shippedDate: [''],
      cbCount: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(200)]],
      cbColor: ['', Validators.required],
      plannedCompleteDate: ['', Validators.required],
      plannedShippedDate: ['', Validators.required],
      awb: ['']

    });
    console.log(this.loginService.fetchEmailFromStorage() + "," + this.loginService.fetchUserNameFromStorage());
    this.id = this.loginService.fetchEmailFromStorage();
    this.displayName = this.loginService.fetchUserNameFromStorage();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  async onSubmit() {
    
    this.submitted = true;
    console.log("==================Submit" + this.form.invalid)

    if (this.form.invalid) {
      return;
    } else {

      let cb: CottonBall = new CottonBall();
      cb.id = this.id;
      cb.awb = this.form.value.awb;
      cb.cbColor = this.form.value.cbColor;
      cb.cbCount = this.form.value.cbCount;
      cb.createdDate = new Date();
      cb.plannedCompleteDate = this.form.value.plannedCompleteDate;
      cb.plannedShippedDate = this.form.value.plannedShippedDate;
      cb.shippingproviders = this.form.value.shippingproviders;
      cb.shippedDate = this.form.value.shippedDate;
      cb.status="new";
      cb.ts = new Date();

      let res = await this.cbService.saveCottonBall(cb);

      this.ngZone.run(() => {
        this.dialog.open(SucessDialogueComponent, {
          data: {
            message: "Sucessfull Registered the Request #-:"+ res,
            loc:"/cotton-ball"
          }
        });
      });

      //this.router.navigate(['/cotton-ball']);
    }
  }

  doGoBack() {
    this.evntService.raiseEvent(EVENTTYPE.SUB_MENU_CLICK, { loc: 'cotton-ball' });
  }

}
