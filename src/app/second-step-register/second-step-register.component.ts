import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DocType, DocTypeSelect, InfoDocumentService} from '../info-document.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-second-step-register',
  templateUrl: './second-step-register.component.html',
  styleUrls: ['./second-step-register.component.css']
})
export class SecondStepRegisterComponent implements OnInit {
  @Input('selected') selected;
  @Input('availableDocs') availableDocs: DocTypeSelect[];
  @Input('getDataDocument') getDataDocument: DocType[];
  valueProgress = 0;
  removedSelects = [];
  secondFormGroup: FormGroup;
  @ViewChild('files') files: ElementRef;
  @Output() secondGroup = new EventEmitter();
  constructor(private infoAuthService: InfoDocumentService) { }

  ngOnInit(): void {
    this.secondFormGroup = new FormGroup({
      selection: new FormControl(''),
      id: new FormControl(''),
      expiry: new FormControl(''),
      file: new FormControl('', Validators.required),
    });
  }
  addDocument() {
    this.valueProgress += parseInt(this.selected.value, 10);
    this.infoAuthService.addDataDocument(this.secondFormGroup.get('id').value, this.secondFormGroup.get('expiry').value, this.selected.type, this.files.nativeElement.files[0].name, this.selected.value);
    this.removedSelects.push(this.availableDocs.find( i => i.type === this.selected.type));
    this.availableDocs = this.availableDocs.filter( i => i.type !== this.selected.type);
    this.secondFormGroup.reset();
  }
  removeDocument(index: number) {
    const removedSelect = this.removedSelects.find(i => i.type === this.getDataDocument[index].selected);
    this.valueProgress -= parseInt( removedSelect.value, 10);
    this.availableDocs.push(removedSelect);
    this.getDataDocument.splice(index, 1);
  }
  sendDataFormGroup() {
    this.secondGroup.emit(this.getDataDocument);
  }
}
