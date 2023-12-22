import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfesseursComponent } from './list-professeurs.component';

describe('ListProfesseursComponent', () => {
  let component: ListProfesseursComponent;
  let fixture: ComponentFixture<ListProfesseursComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListProfesseursComponent]
    });
    fixture = TestBed.createComponent(ListProfesseursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
