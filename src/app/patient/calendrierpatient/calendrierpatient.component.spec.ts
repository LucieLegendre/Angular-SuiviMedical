import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendrierpatientComponent } from './calendrierpatient.component';

describe('CalendrierpatientComponent', () => {
  let component: CalendrierpatientComponent;
  let fixture: ComponentFixture<CalendrierpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendrierpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendrierpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
