import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-request-vacation',
  templateUrl: './request-vacation.component.html',
  styleUrls: ['./request-vacation.component.scss']
})
export class RequestVacationComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  requestForm = this.fb.group({
    type: [''],
    description: [''],
    startDay: [''],
    endDay: [''],
    amount: [''],
  });


  ngOnInit() {
  }

}
