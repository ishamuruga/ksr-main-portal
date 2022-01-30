import { Injectable } from '@angular/core';
import { VUser,users } from 'projects/common-model/src/lib/vol-auth/vol-user';
import { Observable, of, Subscription } from 'rxjs';
import { map, filter, scan, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public doLogin(user:VUser) {
    return of(users).pipe(
      map(x=>{
        return x;
      }),
      map(x=>{
        return x.filter(xx=>{
          if (xx.id===user.id){
            return true;
          } else {
            return false;
          }
        })
      })
    );
  }


}
