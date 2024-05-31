import { Injectable, OnInit, inject } from '@angular/core';
import { Iuser } from '../models/user.interface';
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService{
  
  userArr :Array <Iuser>=[
    {
      userName:"karan",
      userId :"123",
      userRole:"SuperAdmin"
    },
    {
      userName:"Aaru",
      userId :"124",
      userRole:"Candidate"
    },
    {
      userName:"Sakshi",
      userId :"125",
      userRole:"Admin"
    },
    {
      userName:"Meera",
      userId :"126",
      userRole:"Candidate"
    }
  ]
  constructor(
  ) { }
  private _sanckBarService = inject (SnackbarService)
  fetchAllUsers():Array<Iuser>{
    return this.userArr

  }
  fetchUser(id :string):Iuser{
    return this.userArr.find(user =>user.userId===id)as Iuser
  }
  addNewUser(newUser : Iuser){
    this.userArr.unshift(newUser);
    this._sanckBarService.openSnackBar(`the new users ${newUser.userName} is addedd successfully !!!`)
  }
  updateUser(updatedObj : Iuser){
    let getIndex = this.userArr.findIndex(user => user.userId===updatedObj.userId);
    let oldUser = this.userArr[getIndex]
    this.userArr[getIndex] = updatedObj;
    this._sanckBarService.openSnackBar(`the new users ${oldUser.userName} is updated ${updatedObj.userName}successfully !!!`)
  }
  DeleteUser(userObj: Iuser){
    let getIndex = this.userArr.findIndex(user => user.userId===userObj.userId);
    this.userArr.splice(getIndex,1);
    this._sanckBarService.openSnackBar(`the  users  ${userObj.userName} is remove successfully !!!`)
  }
}
