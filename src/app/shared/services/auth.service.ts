import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IloginCred } from '../models/auth.interface';
import { SnackbarService } from './snackbar.service';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLoginStatus :boolean =false;
  private _snackbar =inject(SnackbarService)

  loginSub$ :BehaviorSubject<boolean>=new BehaviorSubject<boolean>(false)
  isAuthenticated(): Promise<boolean>{
   return new Promise((resolve, reject) => {
      setTimeout(() => {
      if(localStorage.getItem("token")){
        this.userLoginStatus = true;
        resolve(this.userLoginStatus)
        this.loginSub$.next(true)
      }else{
        this.userLoginStatus = false;
        this.loginSub$
        this._router.navigate([''])// auth comp
      }
      }, 1000);
    })
  }
  constructor(
    private _router : Router
  ) { }

  loginToApp(cred: IloginCred){
    //Api call for user Auth >> {email, password}
    //aarushitole08@gmail.com >>buyer>>Products
    //sakshishitole01@gmail.com >>admin >> Users and Products
    //karanshitole11@gmail.com >>sa >> Users , Fairs and Products
   if(cred.email === `aarushitole08@gmail.com`&& cred.password ===`Karan@123`){
    // Login Successfull >> userRole , token
    this.userLoginStatus = true;
    localStorage.setItem("token","Bearer Token After Login");
    localStorage.setItem("userRole","buyer");
    this.loginSub$.next(true)
    this._router.navigate(['home'])
   }else if(cred.email === `sakshishitole01@gmail.com`&& cred.password ===`Karan@123`){
    // Login Successfull >> userRole , token
    this.userLoginStatus = true;
    localStorage.setItem("token","Bearer Token After Login");
    localStorage.setItem("userRole","admin");
    this.loginSub$.next(true)
    this._router.navigate(['home'])
   }else if (cred.email === `karanshitole11@gmail.com`&& cred.password ===`Karan@123`){
    // Login Successfull >> userRole , token
    this.userLoginStatus = true;
    localStorage.setItem("token","Bearer Token After Login");
    localStorage.setItem("userRole","sa");
    this._router.navigate(['home']);
    this.loginSub$.next(true);
   }else{
    this._snackbar.openSnackBar(`Invalid email or password`)
   }
    
  }
  logOutFormApp(){
    this.userLoginStatus = false;
    localStorage.removeItem("token");
    localStorage.removeItem("userRole");
    this._router.navigate(['']);
    this.loginSub$.next(false);
  }
}
