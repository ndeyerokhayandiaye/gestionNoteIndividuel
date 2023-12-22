import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StattistiqueComponent } from './stattistique.component';

describe('StattistiqueComponent', () => {
  let component: StattistiqueComponent;
  let fixture: ComponentFixture<StattistiqueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StattistiqueComponent]
    });
    fixture = TestBed.createComponent(StattistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
