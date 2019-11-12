import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtHelperService } from "@auth0/angular-jwt";
import { IUser } from '../models/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  private eventCallback = new Subject<IUser>();
  eventCallback$ = this.eventCallback.asObservable(); 

  decodedToken = this.decodeToken();
  currentUser: IUser;

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization': 'Bearer ' + localStorage.access_token
    })
  };

  requestUrl = 'https://vacations.polytech.rocks:52540/api/Employee/' + this.getCurrentEmployeeId()

  getEmployee() {
    return this.http.get<IUser>(this.requestUrl)
  }

  decodeToken() {
    const helper = new JwtHelperService();
    const token = localStorage.access_token;
    const decoded = helper.decodeToken(token);
    return decoded;
  }

  getCurrentEmployeeId() {
    const employeeId = this.decodedToken.sub;
    return employeeId;
  }

  getCurrentUserRole() {
    const employeeRole = this.decodedToken.role;
    return employeeRole;
  }

}
