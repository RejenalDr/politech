import { Component, OnInit } from '@angular/core';
import { AllusersService } from '../services/allusers.service';
import { IUser } from '../models/user';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.scss']
})
export class AddTeamComponent implements OnInit {

  users: IUser[];


  constructor(private allUsers: AllusersService, private fb: FormBuilder) { }

  addTeamForm = this.fb.group({
    teamName: [''],
    teamLeader: [''],
    teamMembers: [''],
  });

  ngOnInit() {
    this.allUsers.getUsers().subscribe(data => {
      this.users = data;
    })
  }

  addteamSubmit() {
    const formTeamMembers = this.addTeamForm.value.teamMembers;

    const newTeamMembers = this.users.filter(i => formTeamMembers.includes(i.id));
    // console.log(newTeamMembers);
    // console.log(this.addTeamForm.value.teamLeader);

    const newTeam = {
      name: this.addTeamForm.value.teamName,
      teamLeadId: this.addTeamForm.value.teamLeader.id,
      deleted: false,
      teamLeadName: this.addTeamForm.value.teamLeader.name,
      employeeCount: newTeamMembers.length,
      employees: newTeamMembers
    }

    console.log(newTeam)


  }

}
