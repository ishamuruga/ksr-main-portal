import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum EVENTTYPE {
  EVENT_LOGGOUT=1,
  EVENT_LOGIN=2,
  MAIN_MENU_CLICK=3,
  USER_PROFILE_URL=4
}

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private bSubject = new BehaviorSubject({});

  constructor() { }

  public raiseEvent(_eType:EVENTTYPE,_payload:any) {
    this.bSubject.next({
      event:_eType,
      data:_payload,
      ts:new Date()
    });
  }

  public readEvent(){
    return this.bSubject.asObservable();
  }

  public listenToData(_eType:EVENTTYPE) {
    this.readEvent().subscribe((x:any)=>{
      if (x){
        if (x.event == _eType) {
          return x.data;
        }
      }
    });
  }
}
