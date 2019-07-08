import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthentificationpageComponent } from './authentificationpage.component';

describe('AuthentificationpageComponent', () => {
  let component: AuthentificationpageComponent;
  let fixture: ComponentFixture<AuthentificationpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthentificationpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthentificationpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
