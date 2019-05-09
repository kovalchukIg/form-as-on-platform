import { Injectable } from '@angular/core';
import {AbstractControl} from '@angular/forms';


export interface DocType {
  value: string;
  type: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})

export class InfoDocumentService {
  private dataDocument = [];
  private selectValue: DocType[] = [
    {value: '50', type: 'Passport', content: 'Type: Passport (50pts)'},
    {value: '30', type: 'Medical Card', content: 'Type: Medical Card (30pts)'},
    {value: '20', type: 'Driver license', content: 'Type: Driver Licence (20pts)'}
  ];

  getDataDocument() {
    return this.dataDocument;
  }
  getSelectValue() {
    return this.selectValue;
  }

  addDataDocument(id: string, expiry: string, selected: string, file: string, type: string) {
    this.dataDocument.push({
      id,
      expiry,
      selected,
      file,
      type
    });
  }
}
