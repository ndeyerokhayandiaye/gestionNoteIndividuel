import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeEvalComponent } from './programme-eval.component';

describe('ProgrammeEvalComponent', () => {
  let component: ProgrammeEvalComponent;
  let fixture: ComponentFixture<ProgrammeEvalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgrammeEvalComponent]
    });
    fixture = TestBed.createComponent(ProgrammeEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
