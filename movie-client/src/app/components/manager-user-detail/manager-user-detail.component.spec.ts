import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerUserDetailComponent } from './manager-user-detail.component';

describe('ManagerUserDetailComponent', () => {
  let component: ManagerUserDetailComponent;
  let fixture: ComponentFixture<ManagerUserDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerUserDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerUserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
