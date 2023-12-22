import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApprenantComponent } from './add-apprenant.component';

describe('AddApprenantComponent', () => {
  let component: AddApprenantComponent;
  let fixture: ComponentFixture<AddApprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddApprenantComponent]
    });
    fixture = TestBed.createComponent(AddApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
