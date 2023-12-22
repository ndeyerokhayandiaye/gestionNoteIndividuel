import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsClasseComponent } from './details-classe.component';

describe('DetailsClasseComponent', () => {
  let component: DetailsClasseComponent;
  let fixture: ComponentFixture<DetailsClasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailsClasseComponent]
    });
    fixture = TestBed.createComponent(DetailsClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
