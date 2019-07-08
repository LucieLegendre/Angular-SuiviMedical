import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccueilpatientComponent } from './accueilpatient.component';

describe('AccueilpatientComponent', () => {
  let component: AccueilpatientComponent;
  let fixture: ComponentFixture<AccueilpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccueilpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccueilpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
