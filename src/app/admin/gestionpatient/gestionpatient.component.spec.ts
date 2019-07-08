import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionpatientComponent } from './gestionpatient.component';

describe('GestionpatientComponent', () => {
  let component: GestionpatientComponent;
  let fixture: ComponentFixture<GestionpatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionpatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
