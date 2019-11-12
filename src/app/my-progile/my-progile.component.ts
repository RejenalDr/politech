import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';
import { IUser } from '../models/user';
import { EmployeesService } from '../services/employees.service';

@Component({
  selector: 'app-my-progile',
  templateUrl: './my-progile.component.html',
  styleUrls: ['./my-progile.component.scss']
})
export class MyProgileComponent implements OnInit {

  currentUser = {};
  constructor(
    private userService: UserLoginService,
    private employeeService: EmployeesService
    ) { }
  
  ngOnInit() {
    // this.userService.getEmployee().subscribe(data => {this.currentUser = data});
    this.employeeService.getEmployee().subscribe(data => {this.currentUser = data});
    this.employeeService.getCurrentEmployeeId();
  }


}
