import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { IUser } from '../models/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: IUser;
  constructor(private userService: UserLoginService) { }

  ngOnInit() {
    this.currentUser = this.userService.user;
  }

}
