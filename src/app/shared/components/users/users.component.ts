import { Component, OnInit, inject } from '@angular/core';
import { Iuser } from '../../models/user.interface';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  userArr ! :Array<Iuser>
  private _usersService = inject (UsersService)
  constructor() { }

  ngOnInit(): void {
    this.userArr = this._usersService.fetchAllUsers()
  }

}
