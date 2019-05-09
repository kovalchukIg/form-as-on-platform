import {Component, EventEmitter, Input, Output} from '@angular/core';
import { InfoDocumentService} from '../info-document.service';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-info-document',
  templateUrl: './info-document.component.html',
  styleUrls: ['./info-document.component.css']
})
export class InfoDocumentComponent {
  @Input('selected') selected;
  @Input('secondFormGroup') secondFormGroup: FormGroup;
  @Input('valueBar') valueBar: number;
  @Output() documentRemoved = new EventEmitter<object>();
  infoDoc = this.infoService.getDataDocument();

  constructor(private infoService: InfoDocumentService) {}
  removeDocument(index: number) {
    const removedItem = this.infoDoc[index];
    this.valueBar -= removedItem;
    this.infoService.getDataDocument().splice(index, 1);
    this.documentRemoved.emit(removedItem);
  }
}
