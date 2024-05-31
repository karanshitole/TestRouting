import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _matSanckbar : MatSnackBar
  ) { }

  openSnackBar(msg : string){
    this._matSanckbar.open(msg, "close", {
      duration :3000,
      horizontalPosition : 'left',
      verticalPosition: 'top'
    })
  }
}
