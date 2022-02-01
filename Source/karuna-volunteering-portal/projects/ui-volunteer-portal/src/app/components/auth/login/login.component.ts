import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FBLoginService } from 'projects/common-api/src/public-api';
import { VUser } from 'projects/common-model/src/public-api';
import { LayoutService, LoginService } from 'projects/common-services/src/public-api';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;


  constructor(private fb: FormBuilder,
    private router: Router,
    private layoutService: LayoutService,
    private fbLoginService: FBLoginService) {
    this.loginForm = fb.group({
      // We can set default values by passing in the corresponding value or leave blank if we wish to not set the value. For our example, we’ll default the gender to female.
      'userid': ['abirami@gmail.com', Validators.required],
      'password': ['abirami123', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])]
    });


  }

  submitForm(form: any): void {
    console.log(form);
    let userid = form["userid"];
    let password = form["password"]

    console.log(userid + "," + password);
    let user:VUser = new VUser();
    user.id = userid;
    user.password = password;
    this.fbLoginService.signIn(user).then(user=>{
      console.log("==========================FB Regusr")
      console.log(user);
      sessionStorage.setItem("auth",JSON.stringify(user));
      this.layoutService.isAuthenticated = true;
      this.router.navigate(['dashboard']);
    }).catch(err=>{
      throw new Error("Invalid Login");
    }).finally(()=>{
      console.log("Completed")
    })
  }

  ngOnInit(): void {
    this.layoutService.isAuthenticated = false;
    sessionStorage.clear();
  }
}

