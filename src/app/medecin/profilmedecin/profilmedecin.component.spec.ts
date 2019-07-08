import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilmedecinComponent } from './profilmedecin.component';

describe('ProfilmedecinComponent', () => {
  let component: ProfilmedecinComponent;
  let fixture: ComponentFixture<ProfilmedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilmedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
