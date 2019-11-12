import { Component, OnInit, Input } from '@angular/core';
import { UserLoginService } from '../services/user-login.service';


@Component({
  selector: 'app-vacation-days',
  templateUrl: './vacation-days.component.html',
  styleUrls: ['./vacation-days.component.scss']
})
export class VacationDaysComponent implements OnInit {

  @Input() vocationDays: number;
  constructor(private userService: UserLoginService) { }

  ngOnInit() {
  }



}
