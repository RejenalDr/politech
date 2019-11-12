import { Component, OnInit } from '@angular/core';
import { AllusersService } from '../services/allusers.service';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-all-employee',
  templateUrl: './all-employee.component.html',
  styleUrls: ['./all-employee.component.scss']
})
export class AllEmployeeComponent implements OnInit {

  constructor(private allUserSevice: AllusersService, private teamService: TeamService) { }

  allTeamUsers;

  ngOnInit() {
    this.teamService.getAllTeams().subscribe(data =>{ this.allTeamUsers = data});
  }

}
