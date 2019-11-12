import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { TeamService } from '../services/team.service';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss']
})
export class AddEmployeeComponent implements OnInit {

  allTeams;
  currentTeamLeader;

  requestUrl = 'https://vacations.polytech.rocks:52540/api/Employee/';

  constructor(private fb: FormBuilder, private teamService: TeamService, private http: HttpClient) { }

  addEmployeeForm = this.fb.group({
    name: ['', Validators.required],
    surname: ['', Validators.required],
    jobTitle: ['', Validators.required],
    status: ['', Validators.required],
    vacationDays: ['', Validators.required],
    birthDate: ['', Validators.required],
    personalEmail: ['', Validators.required],
    phone: ['', Validators.required],
    hireDate: ['', Validators.required],
    teamName: ['', Validators.required],
    workEmail: ['', Validators.required],
    skype: ['', Validators.required],
    dismissalDate: ['', Validators.required],
    teamLeader: ['', Validators.required],
  });


  ngOnInit() {
    this.teamService.getAllTeams().subscribe(data => {
      this.allTeams = data;
    })
  }

  addEmployeeSubmit(){
    const employee = {
      firstName: this.addEmployeeForm.value.name,
      surname: this.addEmployeeForm.value.surname,
      avatar: null,
      birthdate: this.addEmployeeForm.value.birthDate,
      jobTitle: this.addEmployeeForm.value.jobTitle,
      workEmail: this.addEmployeeForm.value.workEmail,
      email: this.addEmployeeForm.value.personalEmail,
      phone: this.addEmployeeForm.value.phone,
      skype: this.addEmployeeForm.value.skype,
      workStartDate: this.addEmployeeForm.value.hireDate,
      isActive: true,
      workEndDate: this.addEmployeeForm.value.dismissalDate,
      deleted: false,
      balance: this.addEmployeeForm.value.vacationDays,
      teamId: this.addEmployeeForm.value.teamName.id,
      teams: [this.addEmployeeForm.value.teamName]
    };
    console.log(employee);

    // this.http.post(this.requestUrl, employee).subscribe(data => data);
  }

  patchTeamLeaderName(){
    this.addEmployeeForm.patchValue({
      teamLeader: this.addEmployeeForm.value.teamName.teamLeadName
    });
  }

}
