import { Injectable } from '@angular/core';
import { EmployeesService } from './employees.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  currentTeamId;

  constructor(private employeeService: EmployeesService, private http: HttpClient) { 
    this.getTeamId();
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Authorization':  'Bearer ' + localStorage.access_token
    })
  };

  requestUrl = 'https://vacations.polytech.rocks:52540/api/Team/' + this.currentTeamId;

  getAllTeams(){
    const url = 'https://vacations.polytech.rocks:52540/api/Team/';
    return this.http.get(url)
  }

  getTeamId(){
    this.employeeService.getEmployee().subscribe( data => { this.currentTeamId = data.teamId });
  }

  getCurrentTeam(){
    return this.http.get(this.requestUrl)
  }

}
