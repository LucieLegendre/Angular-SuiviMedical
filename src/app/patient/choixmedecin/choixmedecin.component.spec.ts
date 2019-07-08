import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixmedecinComponent } from './choixmedecin.component';

describe('ChoixmedecinComponent', () => {
  let component: ChoixmedecinComponent;
  let fixture: ComponentFixture<ChoixmedecinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoixmedecinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoixmedecinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
