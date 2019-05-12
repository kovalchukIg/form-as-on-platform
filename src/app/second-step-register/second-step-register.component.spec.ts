import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondStepRegisterComponent } from './second-step-register.component';

describe('SecondStepRegisterComponent', () => {
  let component: SecondStepRegisterComponent;
  let fixture: ComponentFixture<SecondStepRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondStepRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondStepRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
