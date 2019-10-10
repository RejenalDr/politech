import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MyProgileComponent } from './my-progile/my-progile.component';
import { HomeComponent } from './home/home.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { MyVacationsComponent } from './my-vacations/my-vacations.component';
import { RequestVacationComponent } from './request-vacation/request-vacation.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/forgot-password', component: ForgetPasswordComponent },
  { path: 'home', component: HomeComponent, children:[
      {path: 'my-profile', component: MyProgileComponent, children:[
        { path: '', component: MyVacationsComponent },
        { path: 'request', component: RequestVacationComponent }
      ]}
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
