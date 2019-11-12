import { Injectable } from '@angular/core';
import { IUser, UserRole } from '../models/user';
import { HttpHeaders,HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
  
  private _user: IUser = {
    id: '1',
    firstName: 'Lisa',
    surname: 'Bolcraft',
    avatar: './../../assets/img/random-user.png',
    birthdate: '1',
    jobTitle: 'Manager',
    workEmail: '1',
    email: '1',
    phone: '1',
    skype: '1',
    workStartDate: '1',
    isActive: true,
    workEndDate: '1',
    deleted: false,
    balance: 0,
    teamId: '1',
  };

  constructor(private http: HttpClient) { }

  public get user(): IUser {
    return this._employee;
  }

  public _employee: IUser;

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization':  'Bearer ' + localStorage.access_token
    })
  };

  requestUrl = 'https://vacations.polytech.rocks:52540/api/Employee/7fac644d-c621-4b14-83d7-ef75347fa149'

  getEmployee(){
    return this.http.get(this.requestUrl, this.httpOptions);
  }

  checkLeader() {
    // if (this._user.role === UserRole.Employee) {
    //   return false;
    // } else {
      return true;
    //}
  }
  checkAdmin() {
    // if (this._user.role === UserRole.Admin) {
      return true;
    // } else {
    //   return false;
    // }
  }


}


