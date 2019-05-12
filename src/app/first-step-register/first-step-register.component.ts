import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-first-step-register',
  templateUrl: './first-step-register.component.html',
  styleUrls: ['./first-step-register.component.css']
})
export class FirstStepRegisterComponent implements OnInit {
  @Input('firstFormGroup') firstFormGroup;

  constructor() { }

  ngOnInit() {
  }

}
