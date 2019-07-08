import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UndossierComponent } from './undossier.component';

describe('UndossierComponent', () => {
  let component: UndossierComponent;
  let fixture: ComponentFixture<UndossierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UndossierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UndossierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
