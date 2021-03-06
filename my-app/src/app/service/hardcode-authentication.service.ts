import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodeAuthenticationService {

  constructor() { }
  authenticate(username,password){
    if(username==="admin" && password==="admin@123"){
      sessionStorage.setItem('authenticaterUser',username);
      return true;
    }
    else{
      return false;
    }
  }
  isUserLoggedIn(){
    let user=sessionStorage.getItem('authenticaterUser')
    return !(user===null)
  }
  logout(){
    sessionStorage.removeItem('authenticaterUser')
  }
}
