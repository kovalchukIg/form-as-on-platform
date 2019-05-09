import {Component, OnInit, ViewChild} from '@angular/core';
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
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  availableDocs: DocType[];
  valueBar = 0;
  removedItem;


  constructor(private infoAuthService: InfoDocumentService) {
    this.availableDocs = this.infoAuthService.getSelectValue();
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
    addDocument() {
      this.valueBar += parseInt(this.selected.value, 10);
      this.infoAuthService.addDataDocument(this.secondFormGroup.get('id').value, this.secondFormGroup.get('expiry').value, this.selected.type, this.secondFormGroup.get('file').value, this.selected.value);
      this.removedItem = this.availableDocs.filter( i => i.type === this.selected.type);
      this.availableDocs = this.availableDocs.filter( i => i.type !== this.selected.type);
      this.secondFormGroup.reset();
  }
    getRemovedDocument(event) {
      this.availableDocs = this.availableDocs.concat(this.removedItem);
      console.log(this.availableDocs);
      this.valueBar -= parseInt(event.type, 10);
    }
}
