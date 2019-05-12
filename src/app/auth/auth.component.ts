import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DocType, InfoDocumentService} from '../info-document.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  isOptional = false;
  isEditable = false;
  selected;
  getDataDocument;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  availableDocs: DocType[];
  valueProgress = 0;


  constructor(private infoAuthService: InfoDocumentService) {
    this.availableDocs = this.infoAuthService.getSelectValue();
    this.getDataDocument = this.infoAuthService.getDataDocument();
  }

  ngOnInit() {
    this.firstFormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      postCode: new FormControl('', Validators.required)
    });
    this.secondFormGroup = new FormGroup({
      selection: new FormControl('', Validators.required),
      id: new FormControl('', Validators.required),
      expiry: new FormControl('', Validators.required),
      file: new FormControl('', Validators.required),
    });
  }
}
