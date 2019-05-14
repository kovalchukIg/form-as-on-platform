import {Component, DoCheck, OnChanges, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {DocType, DocTypeSelect, InfoDocumentService} from '../info-document.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @ViewChild('stepper') stepper;
  @ViewChild('stepper1') stepper1;
  isOptional = false;
  isEditable = false;
  getDataDocument: DocType[];
  availableDocs: DocTypeSelect[];
  dataFormsGroup;
  firstFormGroup: FormGroup;
  valueProgress = 0;
  addedSelects = [];
  secondFormGroup: FormGroup;
  file;


  get selectionType() {
    return this.secondFormGroup.get('selection').value.type;
  }
  get expiry() {
    return this.secondFormGroup.get('expiry').value;
  }
  get idDocument() {
    return  this.secondFormGroup.get('idDocument').value;
  }
  get fileName() {
    return this.file.files[0].name;
  }
  get selectionValue() {
    return this.secondFormGroup.get('selection').value.type;
  }

  constructor(private infoAuthService: InfoDocumentService) {
    this.availableDocs = this.infoAuthService.getSelectValue();
    this.getDataDocument = this.infoAuthService.getDataDocument();
  }

  ngOnInit(): void {
    this.firstFormGroup = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      postCode: new FormControl('', [Validators.required, Validators.minLength(5)])
    });
    this.secondFormGroup = new FormGroup({
      selection: new FormControl(''),
      idDocument: new FormControl(''),
      expiry: new FormControl(''),
      file: new FormControl('', Validators.required),
    });
  }

  getFile(file) {
    this.file = file;
  }
  getRemoveDocument(item) {
    const removedDocument = this.getDataDocument.filter(i => i.id === item.id);
    const removedCurrentSelect = this.addedSelects.find(i => i.type === removedDocument[0].selected);
    this.availableDocs.push(removedCurrentSelect);
    this.getDataDocument.filter(i => i.id !== item.id);
    this.valueProgress -= parseInt( removedCurrentSelect.value, 10);
    this.getDataDocument = this.getDataDocument.filter(i => i.id !== item.id);
  }
  addDocument() {
    this.getDataDocument.push({id: Date.now(), idDocument: this.idDocument, expiry: this.expiry,  type: this.selectionType, file: this.fileName, selected: this.selectionValue});
    this.valueProgress += parseInt(this.secondFormGroup.get('selection').value.value, 10);
    this.addedSelects.push(this.availableDocs.find( i => i.type === this.selectionType));
    this.availableDocs = this.availableDocs.filter( i => i.type !== this.selectionType);
    this.secondFormGroup.reset();
  }
  sendDataFormsGroup() {
     this.dataFormsGroup = this.firstFormGroup.value;
     this.dataFormsGroup.personalData = this.getDataDocument;
     console.log(this.dataFormsGroup);
  }
}
