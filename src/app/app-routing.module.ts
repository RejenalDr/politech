import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyProgileComponent } from './my-progile/my-progile.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { MyVacationsComponent } from './my-vacations/my-vacations.component';
import { RequestVacationComponent } from './request-vacation/request-vacation.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AllEmployeeComponent } from './all-employee/all-employee.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/forgot-password', component: ForgetPasswordComponent },
  { path: 'home', component: HomeComponent, children:[
      {path: 'my-profile', component: MyProgileComponent, children:[
        { path: '', component: MyVacationsComponent },
        { path: 'request', component: RequestVacationComponent },
      ]},
  { path: 'edit', component: EditProfileComponent },
  { path: 'add-team', component: AddTeamComponent },
  { path: 'add-employee', component: AddEmployeeComponent },
  { path: 'all-employee', component: AllEmployeeComponent }
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
