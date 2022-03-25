import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FBLoginService, FbUserService } from 'projects/common-api/src/public-api';
import { Volunteer, VUser } from 'projects/common-model/src/public-api';
import { EventService, EVENTTYPE } from 'projects/common-services/src/lib/utility/event.service';
import { LayoutService, LoginService } from 'projects/common-services/src/public-api';
import { first } from 'rxjs';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  showErrorMessage:boolean=false;
  constructor(private fb: FormBuilder,
    private router: Router,
    private layoutService: LayoutService,
    private fbLoginService: FBLoginService) {
    this.loginForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'userid': ['', Validators.required],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
    });


  }

  submitForm(form: any): void {
    //console.log(form);
    let userid = form["userid"];
    let password = form["password"]

    //console.log(userid + "," + password);
    let user:VUser = new VUser();
    user.id = userid;
    user.password = password;
    this.fbLoginService.signIn(user).then((vuser:VUser)=>{
      sessionStorage.setItem("auth",JSON.stringify(vuser));
      this.layoutService.isAuthenticated = true;
      this.router.navigate(['dashboard']);
    }).catch(err=>{
      this.router.navigate(['/']);
      this.showErrorMessage = true
    }).finally(()=>{
      //console.log("Component Completed")
    })
  }

  ngOnInit(): void {
    this.layoutService.isAuthenticated = false;
    sessionStorage.clear();
    //console.log("^^^^^^^^^^^^^^^^^^^^");
    // this.fbUserService.fetchUserById("abi@abi.com").subscribe((x:any)=>{
    //   console.log(x)
    // })

  }

  async doGoogleSignIn(){
    alert("Signin");
    let data:any = await this.fbLoginService.googleSignin();
    if (data){
      sessionStorage.setItem("auth",JSON.stringify(data));
      this.layoutService.isAuthenticated = true;
      this.router.navigate(['dashboard']);
    }
    //console.log(data);
  }
}

