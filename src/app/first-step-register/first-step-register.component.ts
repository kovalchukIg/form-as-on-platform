import {AfterViewInit, Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-first-step-register',
  templateUrl: './first-step-register.component.html',
  styleUrls: ['./first-step-register.component.css']
})
export class FirstStepRegisterComponent implements OnInit {
  firstFormGroup: FormGroup;
  @Output() firstGroup = new EventEmitter();
  @Output() valid = new EventEmitter<boolean>();

  constructor() {
  }

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      postCode: new FormControl('', [Validators.required, Validators.minLength(5)])
    });

    this.firstFormGroup.valueChanges
      .subscribe(res => {
        const isValid = this.firstFormGroup.valid;
        this.valid.emit(isValid);
      });
}

  sendDataFirstGroup() {
    this.firstGroup.emit(this.firstFormGroup.value);
  }

}
