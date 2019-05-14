import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-first-step-register',
  templateUrl: './first-step-register.component.html',
  styleUrls: ['./first-step-register.component.css']
})
export class FirstStepRegisterComponent implements OnInit {
  @Input('firstFormGroup') firstFormGroup;

  constructor() {}

  ngOnInit() {}
}
