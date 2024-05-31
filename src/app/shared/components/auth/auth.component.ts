import { Component, OnInit, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { IloginCred } from '../../models/auth.interface';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  allReadyHasAccount : boolean = false;
  loginform! :FormGroup;
  private _authService = inject(AuthService)
  constructor() { }

  ngOnInit(): void {
    this.createLoginForm()
  }
  createLoginForm(){
    this.loginform = new FormGroup({
      email : new FormControl(null,[Validators.required]),
      password: new FormControl(null,[Validators.required])
    })
  }
  onLogin(){
    if(this.loginform.valid){
      let val:IloginCred = this.loginform.value;
      this._authService.loginToApp(val)
    }
  }
}
