import { Injectable } from '@angular/core';
import { IUser, UserRole } from '../models/user';
@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  private _user: IUser = {
    date: new Date(1972, 10, 22),
    hireDate: new Date(1992, 11, 12),
    id: 1,
    name: 'Lisa Bolcraft',
    personalEmail: 'personal@lisa.com',
    phone: '+1234567890',
    position: 'employee',
    skype: 'bolcraft',
    role: UserRole.Leader,
    teamLeader: 'leader1',
    teamName: 'team1',
    workEmail: 'work@lisa.com',
    roleFormatted: UserRole[UserRole.Employee],
    avatarLink: './../../assets/img/random-user.png'
  };

  constructor() { }

  public get user(): IUser {
    return this._user;
  }

  login() {
  }
  logout() {
  }
  getRoles() {
  }
  hasRole() {
  }
  checkLeader() {
    if (this._user.role === UserRole.Employee) {
      return false;
    } else {
      return true;
    }
  }
  checkAdmin() {
    if (this._user.role === UserRole.Admin) {
      return true;
    } else {
      return false;
    }
  }


}


