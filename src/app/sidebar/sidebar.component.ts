import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { IUser, UserRole } from '../models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  currentUser: IUser;
  leaderSidebar: boolean = false;
  adminSidebar: boolean = false;
  constructor(private userService: UserLoginService) { }

  ngOnInit() {
    this.currentUser = this.userService.user;
    this.leaderSidebar = this.userService.checkLeader();
    this.adminSidebar = this.userService.checkAdmin();
  }

}
