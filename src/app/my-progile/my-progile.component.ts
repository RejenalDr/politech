import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { IUser } from '../models/user';

@Component({
  selector: 'app-my-progile',
  templateUrl: './my-progile.component.html',
  styleUrls: ['./my-progile.component.scss']
})
export class MyProgileComponent implements OnInit {

  currentUser: IUser;
  constructor(private userService: UserLoginService) { }
  
  ngOnInit() {
    this.currentUser = this.userService.user;
  }


}
