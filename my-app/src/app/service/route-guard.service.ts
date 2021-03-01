import { Injectable } from '@angular/core';
import { CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router } from '@angular/router';
import { HardcodeAuthenticationService } from './hardcode-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private hardcodeAuthenticationServic:HardcodeAuthenticationService,
    private router:Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.hardcodeAuthenticationServic.isUserLoggedIn())
    return true;
    this.router.navigate(['login']);
    return false;
  }
}
