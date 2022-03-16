import { Injectable } from '@angular/core';
import { FBLoginService } from 'projects/common-api/src/public-api';
import { VUser } from 'projects/common-model/src/lib/vol-auth/vol-user';
import { Observable, of, Subscription } from 'rxjs';
import { map, filter, scan, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(private fbLogin:FBLoginService) { }

  public fetchUserNameFromStorage(){
    let vol:any = sessionStorage.getItem("vol")?JSON.parse(sessionStorage.getItem("vol")+""):"";
    console.log("^%");
    console.log(vol.firstname + " " + vol.lastname);
    //return "";
    return `${vol.firstname} ${vol.lastname}`;
  }

  public fetchEmailFromStorage(){
    let vol:any = sessionStorage.getItem("vol")?JSON.parse(sessionStorage.getItem("vol")+""):"";
    console.log("^%");
    console.log(vol);
    //return "";
    return `${vol.email}`;
  }



  // public doLogin(user:VUser) {
  //   return of(users).pipe(
  //     map(x=>{
  //       return x;
  //     }),
  //     map(x=>{
  //       return x.filter(xx=>{
  //         if (xx.id===user.id){
  //           return true;
  //         } else {
  //           return false;
  //         }
  //       })
  //     })
  //   );
  // }


}
