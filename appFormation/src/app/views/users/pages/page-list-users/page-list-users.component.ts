import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { RoleUser } from 'src/app/shared/enums/role-user.enum';
import { BtnI } from 'src/app/shared/interfaces/btn-i';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-page-list-users',
  templateUrl: './page-list-users.component.html',
  styleUrls: ['./page-list-users.component.scss']
})
export class PageListUsersComponent implements OnInit {

  public users: User[];
  public headers: string[];
  public roles = Object.values(RoleUser)
  public btnAddUser: BtnI;

  constructor(
    private us: UsersService
  ) { }

  ngOnInit(): void {
    this.headers = ['ID', 'Username', 'Role'];
    this.btnAddUser = { label: 'Add User', route: 'add' };
    this.us.getAll().subscribe(datas => this.users = datas);
  }

  public updateRole(user: User, event) {
    console.log('test ok', user)
  }

}
