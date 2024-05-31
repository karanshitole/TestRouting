import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRoleGuard implements CanActivate {
  private _router = inject(Router)
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):
     Observable<boolean | UrlTree> 
     |Promise<boolean | UrlTree> 
     | boolean 
     | UrlTree {
      // 1 Array of userRole of the path to which we want to navigate
      //activatedRouteSnapShot
      let userRoleArr : Array<string>= route.data['userRole']
      console.log(userRoleArr);
      //2 Userrole of the login User
     // LocalStorage

     let loginUserRole :string= localStorage.getItem('userRole')as string;
     console.log(loginUserRole);
     
   if(userRoleArr.includes(loginUserRole)){
    return true
   }else{
    return this._router.createUrlTree(['home'])
   }
   
    
  }
  
}
