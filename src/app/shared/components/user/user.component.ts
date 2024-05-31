import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { Iuser } from '../../models/user.interface';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  userId ! :string;
  userInfo!: Iuser;
  constructor(
    private route : ActivatedRoute,
    private _usersServices :UsersService,
    private _router : Router,
    private _matDialog : MatDialog
  ) { }

  ngOnInit(): void {
  //  this.userId = this.route.snapshot.params['userId'];
  //  if(this.userId){
  //   this.userInfo=this._usersServices.fetchUser(this.userId)
  //  }
   this.route.params.subscribe(res =>{
    console.log(res['userId']);
    if(this.userId){
      this.userInfo=this._usersServices.fetchUser(this.userId)
    }
    
   })
  }
  onDeleteUser(){
    let dialogConf = new MatDialogConfig();
    // dialogConf.width ='350px'

    // let DialogRef= this._matDialog.open(ConfirmDialogComponent, dialogConf)

    // DialogRef.afterClosed()
    //          .subscribe(res =>{
    //           if(res){
    //             this._usersServices.DeleteUser(this.userInfo)
    //             this._router.navigate(['/users'])
    //           }else{
    //             return 
    //           }
              
    //          })
    this._usersServices.DeleteUser(this.userInfo)
    this._router.navigate(['/users'])
  }

}
