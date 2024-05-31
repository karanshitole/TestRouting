import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

  constructor(
    private _matDialogRef : MatDialogRef<ConfirmDialogComponent>
  ) { }

  ngOnInit(): void {
  }
  giveConfirmation(flag : boolean){
    this._matDialogRef.close(flag)
  }
}
