import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CottonBall } from 'projects/common-model/src/public-api';
import { EventService, EVENTTYPE, LoginService } from 'projects/common-services/src/public-api';

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
    private loginService:LoginService) { }

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

  onSubmit() {
    
    this.submitted = true;
    console.log("==================Submit" + this.form.invalid)

    if (this.form.invalid) {
      return;
    } else {

      let cb: CottonBall = new CottonBall();
      cb.id = this.form.value.emailid;
      cb.awb = this.form.value.awb;;
      cb.cbColor = this.form.value.cbColor;
      cb.cbCount = this.form.value.cbCount;
      cb.createdDate = new Date();
      cb.plannedCompleteDate = this.form.value.plannedCompleteDate;
      cb.plannedShippedDate = this.form.value.plannedShippedDate;
      cb.shippingproviders = this.form.value.shippingproviders;
      cb.ts = new Date();
      console.log("=================================");
      console.log(cb);
    }
  }

  doGoBack() {
    this.evntService.raiseEvent(EVENTTYPE.SUB_MENU_CLICK, { loc: 'cotton-ball' });
  }

}
