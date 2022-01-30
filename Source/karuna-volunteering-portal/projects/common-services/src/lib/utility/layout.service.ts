import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LayoutService {

  private _isAuthenticated:boolean = false;

  public set isAuthenticated(_val:boolean) {
    this._isAuthenticated = _val;
  }

  public get isAuthenticated() {
    return this._isAuthenticated;
  }

  constructor() { }
}
