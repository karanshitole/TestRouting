import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loginUserRole !: string ;
  constructor(
    private _authServics : AuthService
  ) { }

  ngOnInit(): void {
    this.loginUserRole = localStorage.getItem('userRole')!

    console.log(this.loginUserRole);
    
  }
  // onLogin(){
  //   this._authServics.loginToApp()
  // }
  onLogOut(){
    this._authServics.logOutFormApp()
  }
}
