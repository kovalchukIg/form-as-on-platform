import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {DocType, DocTypeSelect} from '../info-document.service';

@Component({
  selector: 'app-second-step-register',
  templateUrl: './second-step-register.component.html',
  styleUrls: ['./second-step-register.component.css']
})
export class SecondStepRegisterComponent implements OnInit {
  @Input('availableDocs') availableDocs: DocTypeSelect[];
  @Input('getDataDocument') getDataDocument: DocType[];
  @Input('secondFormGroup') secondFormGroup;
  @Input('valueProgress') valueProgress;
  @Output() sendFiles = new EventEmitter();
  @Output() currentItem = new EventEmitter<object>();
  constructor() { }
  ngOnInit(): void {}
  changeInput(file) {
    this.sendFiles.emit(file);
  }
  removeDocument(item: DocType) {
    this.currentItem.emit(item);
  }
}
