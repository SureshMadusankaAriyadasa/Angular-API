import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodeAuthenticationService } from '../service/hardcode-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:String
  password:String
  errMsg='Invalid Credentials'
  invalidLogin=false
  constructor(private router:Router,private hardcodeAuthenticationService:HardcodeAuthenticationService) { 
  }

  ngOnInit(): void {
  }
  handelLongin(){
    // console.log(this.username);
    //if(this.username==="admin" && this.password==="admin@123"){
    if(this.hardcodeAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcom',this.username])
      this.invalidLogin=false
    }
    else{
      this.invalidLogin=true
    }
  }

}
