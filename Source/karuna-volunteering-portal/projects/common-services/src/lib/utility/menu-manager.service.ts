import { Injectable } from '@angular/core';
import { MainMenu, menus } from 'projects/common-model/src/public-api';



@Injectable({
  providedIn: 'root'
})
export class MenuManagerService {

  constructor() { }

  public getAllMenus(): MainMenu[] {
    return menus;
  }

}
