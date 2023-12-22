import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEvalComponent } from './list-eval.component';

describe('ListEvalComponent', () => {
  let component: ListEvalComponent;
  let fixture: ComponentFixture<ListEvalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListEvalComponent]
    });
    fixture = TestBed.createComponent(ListEvalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
