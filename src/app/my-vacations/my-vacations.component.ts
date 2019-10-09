import { Component, OnInit } from '@angular/core';
import { VacationTable } from '../models/vacationTable';

@Component({
  selector: 'app-my-vacations',
  templateUrl: './my-vacations.component.html',
  styleUrls: ['./my-vacations.component.scss']
})
export class MyVacationsComponent implements OnInit {
  vacationTable: VacationTable[] = [
    new VacationTable(
      new Date(2019, 10, 1),
      new Date(2019, 10, 4),
      'Vacation',
      'approved'),
      new VacationTable(
        new Date(2019, 9, 1),
        new Date(2019, 9, 10),
        'University',
        'declined')

  ];
  constructor() { }

  ngOnInit() {
  }


}
