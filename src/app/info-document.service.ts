import { Injectable } from '@angular/core';

export interface DocTypeSelect {
  value: string;
  type: string;
  pts: string;
}

export interface DocType {
  id: string;
  expiry: string;
  selected: string;
  file: string;
  type: string;
}

@Injectable({
  providedIn: 'root'
})

export class InfoDocumentService {
  private dataDocument = [];
  private selectValue: DocTypeSelect[] = [
    {value: '50', type: 'Passport', pts: '50(pts)'},
    {value: '30', type: 'Medical Card', pts: '30(pts)'},
    {value: '20', type: 'Driver license', pts: '20(pts)'}
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
