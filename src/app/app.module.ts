import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatButtonModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule, MatListModule, MatNativeDateModule, MatOptionModule, MatProgressBarModule, MatSelectModule,
  MatStepperModule
} from '@angular/material';
import {InfoDocumentService} from './info-document.service';
import { FirstStepRegisterComponent } from './first-step-register/first-step-register.component';
import { SecondStepRegisterComponent } from './second-step-register/second-step-register.component';


@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    FirstStepRegisterComponent,
    SecondStepRegisterComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatOptionModule,
    MatProgressBarModule,
    FormsModule,
    MatListModule,
  ],
  providers: [InfoDocumentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
