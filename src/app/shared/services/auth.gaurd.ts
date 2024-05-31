import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";



@Injectable({
    providedIn: 'root'
})

export class AuthGaurd implements CanActivate, CanActivateChild{
    private _authService = inject(AuthService)
      constructor(){

      }
      canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
       boolean | Observable<boolean> | Promise<boolean> {
         return this._authService.isAuthenticated()
           .then((res:boolean)=>{
           return res
           })
}
canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
  return this._authService.isAuthenticated()
             .then((res:boolean)=>{
              return res
             })
}
}