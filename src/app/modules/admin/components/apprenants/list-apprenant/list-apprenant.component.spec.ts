import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApprenantComponent } from './list-apprenant.component';

describe('ListApprenantComponent', () => {
  let component: ListApprenantComponent;
  let fixture: ComponentFixture<ListApprenantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListApprenantComponent]
    });
    fixture = TestBed.createComponent(ListApprenantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
