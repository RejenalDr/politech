import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeesService } from '../services/employees.service';
import { IUser } from '../models/user';


@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {

  currentUser: IUser;

  constructor(private fb: FormBuilder, private employeeService: EmployeesService) { }

  editProfileForm = this.fb.group({
    name: [''],
    surname: [''],
    jobTitle: [''],
    status: [''],
    vacationDays: [''],
    birthDate: [''],
    personalEmail: [''],
    phone: [''],
    hireDate: [''],
    teamName: [''],
    workEmail: [''],
    skype: [''],
    dismissalDate: [''],
    teamLeader: [''],
  });

  editSubmit() {
    const employee = {
      firstName: this.editProfileForm.value.name,
      surname: this.editProfileForm.value.surname,
      avatar: null,
      birthdate: this.editProfileForm.value.birthDate,
      jobTitle: this.editProfileForm.value.jobTitle,
      workEmail: this.editProfileForm.value.workEmail,
      email: this.editProfileForm.value.personalEmail,
      phone: this.editProfileForm.value.phone,
      skype: this.editProfileForm.value.skype,
      workStartDate: this.editProfileForm.value.hireDate,
      isActive: true,
      workEndDate: this.editProfileForm.value.dismissalDate,
      deleted: false,
      balance: this.editProfileForm.value.vacationDays,
      teamId: this.editProfileForm.value.teamName.id,
      teams: [this.editProfileForm.value.teamName]
    };
    console.log(employee);
  }

  ngOnInit() {
    this.employeeService.getEmployee().subscribe(data => {
      this.currentUser = data;
      this.editProfileForm.patchValue({
        name: this.currentUser.firstName,
        surname: this.currentUser.surname,
        jobTitle: this.currentUser.jobTitle,
        status: this.currentUser.isActive,
        vacationDays: this.currentUser.balance,
        birthDate: this.currentUser.birthdate,
        personalEmail: this.currentUser.email,
        phone: this.currentUser.phone,
        hireDate: this.currentUser.workStartDate,
        teamName: this.currentUser.teamId,
        workEmail: this.currentUser.workEmail,
        skype: this.currentUser.skype,
        dismissalDate: this.currentUser.workEndDate
      });
    });
    
  }

}
