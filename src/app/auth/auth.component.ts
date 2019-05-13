import {Component} from '@angular/core';
import { FormGroup} from '@angular/forms';
import {DocType, DocTypeSelect} from '../info-document.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  isFirstFormValid = false;
  isOptional = false;
  isEditable = false;
  selected;
  getDataDocument: DocType[];
  availableDocs: DocTypeSelect[];
  dataFormsGroup;
  firstFormGroup: FormGroup;
  constructor() {}
  getDataFirstForm(data) {
    this.dataFormsGroup = data;
  }
  getDataSecondForm(event) {
    this.dataFormsGroup.personalData = event;
    console.log(this.dataFormsGroup);
  }
  getFirstForm(event) {
    this.firstFormGroup = event;
  }
}
