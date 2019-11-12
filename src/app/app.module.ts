import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MyProgileComponent } from './my-progile/my-progile.component';
import { VacationDaysComponent } from './vacation-days/vacation-days.component';
import { MyVacationsComponent } from './my-vacations/my-vacations.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RequestVacationComponent } from './request-vacation/request-vacation.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { NewTeamComponent } from './new-team/new-team.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddTeamComponent } from './add-team/add-team.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { InterceptService } from './services/intercept.service';
import { AllEmployeeComponent } from './all-employee/all-employee.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetPasswordComponent,
    HeaderComponent,
    SidebarComponent,
    MyProgileComponent,
    VacationDaysComponent,
    MyVacationsComponent,
    HomeComponent,
    RequestVacationComponent,
    EditProfileComponent,
    NewTeamComponent,
    AddTeamComponent,
    AddEmployeeComponent,
    AllEmployeeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
