import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginInfo:any = null;

  constructor() { }

  setLoginInfo(info:any):void{
    this.loginInfo = info;
  }

  getLoginInfo():any{
    return this.loginInfo;
  }
}
