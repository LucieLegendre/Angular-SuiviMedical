import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnAdminComponent } from './un-admin.component';

describe('UnAdminComponent', () => {
  let component: UnAdminComponent;
  let fixture: ComponentFixture<UnAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
