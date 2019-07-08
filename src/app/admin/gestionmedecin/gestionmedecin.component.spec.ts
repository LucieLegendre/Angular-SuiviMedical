import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionmedecinComponent } from './gestionmedecin.component';

describe('GestionmedecinComponent', () => {
  let component: GestionmedecinComponent;
  let fixture: ComponentFixture<GestionmedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionmedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
