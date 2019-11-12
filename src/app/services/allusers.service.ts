import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AllusersService {


  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Authorization':  'Bearer ' + localStorage.access_token
    })
  };

  requestUrl = 'https://vacations.polytech.rocks:52540/api/Employee/all';

  getUsers(){
    return this.http.get<IUser[]>(this.requestUrl, this.httpOptions)
  }

}
