import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  a = 0;
  b = 0;

  userToken = true;

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    //   this.a=40;
    //   this.b=20;

    // if(this.a > this.b){
    //   return true;
    // }
    // else{
    //   return false;
    // }

    if (this.userToken == true) {
      return true;
    } else {
      return false;
    }
  }
}
