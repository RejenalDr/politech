import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      "email": new FormControl('t.vasya@gmail.com'),
      "password": new FormControl('123asdQ')
  });
  }

  

  onSubmit(){
    this.authService.SingIn(this.loginForm.value).subscribe(() => {
      this.router.navigate(['../home/my-profile']);
    });
  }

  

}
