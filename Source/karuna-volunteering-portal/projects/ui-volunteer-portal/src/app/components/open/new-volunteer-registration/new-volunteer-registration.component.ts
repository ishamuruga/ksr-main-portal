import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Country, Volunteer } from 'projects/common-model/src/public-api';
import { NewVolRegistrationService, Validation } from 'projects/common-services/src/public-api';
import { ToastrService } from 'ngx-toastr';
import { throws } from 'assert';
import { EventService, EVENTTYPE } from 'projects/common-services/src/lib/utility/event.service';
import { FbCommonUtilService } from 'projects/common-api/src/public-api';

@Component({
  selector: 'app-new-volunteer-registration',
  templateUrl: './new-volunteer-registration.component.html',
  styleUrls: ['./new-volunteer-registration.component.css']
})
export class NewVolunteerRegistrationComponent implements OnInit {

  vol: Volunteer = new Volunteer();
  uploadPercent: number = 0;
  countries:Country[]=[];
  states:any[]=[];
  areaList: string[] = [
    'Cotton Ball',
    'Art and Craft',
    'Social Media',
    'Creating Awraness',
    'Fund Raising',
  ];
  form: FormGroup = new FormGroup({
    firstname: new FormControl(''),
    lastname: new FormControl(''),  
    email: new FormControl(''),
    password: new FormControl(''),
    confirmpassword: new FormControl(),
    dob: new FormControl(''),
    profile: new FormControl(''),
    mobile: new FormControl(''),
    address1: new FormControl(''),
    address2: new FormControl(''),
    address3: new FormControl(''),
    street: new FormControl(''),
    state: new FormControl(''),
    city: new FormControl(''),
    country: new FormControl(''),
    pincode: new FormControl(''),
    areas: new FormControl(''),
    personVisit: new FormControl(''),
  });
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private volService: NewVolRegistrationService,
    private storage: AngularFireStorage,
    private route: Router,
    private toastr: ToastrService,
    private evntService:EventService,
    private utilService:FbCommonUtilService
  ) {}
  ngOnInit(): void {
    this.evntService.readEvent().subscribe((x:any)=>{
      if (x.event==EVENTTYPE.USER_PROFILE_URL){
        console.log("&&&&&&&&&&&&&&&&&&&&&&& Event Captures $$$$$$$$$$$$$");
        console.log(x.data.loc);
        this.vol.profile = x.data.loc;
      };
    })
    this.form = this.formBuilder.group(
      {
        firstname: ['', Validators.required],
        middlename: [''],
        lastname: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15),
          ],
        ],
        confirmpassword: ['', Validators.required],
        dob: ['', Validators.required],
        profile: ['', Validators.required],
        mobile: [
          '',
          [
            Validators.required,
            Validators.pattern('^((\\+91-?)|0)?[0-9]{10}$'),
          ],
        ],
        landline: [''],
        address1: ['', Validators.required],
        address2: ['', Validators.required],
        address3: ['', Validators.required],
        street: ['', Validators.required],
        state: ['', Validators.required],
        city: ['', Validators.required],
        country: ['', Validators.required],
        pincode: ['', Validators.required],
        areas: [null, [Validators.required, Validators.minLength(2)]],
        personVisit: ['', Validators.required],
      },
      {
        validators: [Validation.match('password', 'confirmpassword')],
      }
    );
    this.utilService.getReferenceData("country").subscribe((response:any)=>{
      console.log(response);
      for (let item of response) {
        console.log(item.payload.doc.data());
        this.countries.push(item.payload.doc.data() as Country);
        console.log(this.countries);
      }
    })
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }


  async onSubmit() {
    console.log(",,,,,profile..." +  this.form.value.profile);
    console.log("Form Submited");
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      console.log("Form is being processed");
      
      this.vol.firstname = this.form.value.firstname;
      this.vol.middlename = this.form.value.middlename;
      this.vol.lastname = this.form.value.lastname;
      this.vol.email = this.form.value.email;
      this.vol.password = this.form.value.password;
      this.vol.dob = this.form.value.dob;
      this.vol.mobile = this.form.value.mobile;
      this.vol.landline = this.form.value.landline;
      this.vol.address1 = this.form.value.address1;
      this.vol.address2 = this.form.value.address2;
      this.vol.address3 = this.form.value.address3;
      this.vol.street = this.form.value.street;
      this.vol.state = this.form.value.state;
      this.vol.city = this.form.value.city;
      this.vol.country = this.form.value.country;
      this.vol.pincode = this.form.value.pincode;
      this.vol.areas = this.form.value.areas;
      this.vol.personVisit = this.form.value.personVisit;
      this.vol.status = false;
      //this.vol.profile = this.form.value.profile;
      console.log("=================BEFORE")
      console.log("=================aFTRE1.0")
      this.volService.saveVolunteer(this.vol).then(() => {
        this.volService.signUp(this.vol.email, this.vol.password).then(
          () => {
            console.log("=================aFTRE2.0")
            this.toastr.success('Volunteer Registration successfull');
            
            setTimeout(()=>{
              this.route.navigate(['login']);
            },1000);

          },
          (err) => {
            this.toastr.error('Registration Failed');
          }
        );
      });
    }
  }



  async uploadFile(event: any) {
    console.log("..NewVolunteerRegistrationComponent");
    // (await this.volService.uploadFile(event)).subscribe(url=>{
    //   console.log("$$$$$$$$$$$$$$$");
    //   console.log(url);
    //   this.vol.profile = url;
    // }); 
    this.volService.uploadFile(event);
  }
 
  doCountryChange(data:string){
    console.log(data);
    this.countries.map((c:Country)=>{
      if (c.code === data) {
        this.states = c.state;
        return;
      }
    })
  }

  doStateChange(data:any) {
    console.log(data);
  }
  
  goBack(){
    this.evntService.raiseEvent(EVENTTYPE.SUB_MENU_CLICK,{loc:"/"});    
  }


}
