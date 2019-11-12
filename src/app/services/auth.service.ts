import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  getToken(){
    return localStorage.getItem('access_token');
  }

  SingIn(userDetails: { email: string, password: string }) {
    const formData = new FormData();

    formData.append('username', userDetails.email);
    formData.append('password', userDetails.password);
    formData.append('client_id', 'api');
    formData.append('client_secret', 'vacationsecrets');
    formData.append('grant_type', 'password');

    return this.http.post('https://vacations.polytech.rocks:52540/connect/token', formData)
      .pipe(map((response) => {
        localStorage.setItem('access_token', response['access_token']);
        // window['auth_token'] = response['access_token'];
      }));
  }

  
}
