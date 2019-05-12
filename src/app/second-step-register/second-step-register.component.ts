import {Component, Input, OnInit} from '@angular/core';
import {InfoDocumentService} from '../info-document.service';

@Component({
  selector: 'app-second-step-register',
  templateUrl: './second-step-register.component.html',
  styleUrls: ['./second-step-register.component.css']
})
export class SecondStepRegisterComponent {
  @Input('secondFormGroup') secondFormGroup;
  @Input('selected') selected;
  @Input('availableDocs') availableDocs;
  @Input('getDataDocument') getDataDocument;
  @Input('valueProgress') valueProgress;
  removedSelects = [];
  constructor(private infoAuthService: InfoDocumentService) { }
  addDocument() {
    this.valueProgress += parseInt(this.selected.value, 10);
    this.infoAuthService.addDataDocument(this.secondFormGroup.get('id').value, this.secondFormGroup.get('expiry').value, this.selected.type, this.secondFormGroup.get('file').value, this.selected.value);
    this.removedSelects.push(this.availableDocs.find( i => i.type === this.selected.type));
    this.availableDocs = this.availableDocs.filter( i => i.type !== this.selected.type);
    this.secondFormGroup.reset();
    console.log(this.availableDocs);
  }
  removeDocument(index: number) {
    const removedSelect = this.removedSelects.find(i => i.type === this.getDataDocument[index].selected);
    this.valueProgress -= parseInt( removedSelect.value, 10);
    this.availableDocs.push(removedSelect);
    this.getDataDocument.splice(index, 1);
  }
}
