import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerReviewDetailComponent } from './manager-review-detail.component';

describe('ManagerReviewDetailComponent', () => {
  let component: ManagerReviewDetailComponent;
  let fixture: ComponentFixture<ManagerReviewDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagerReviewDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerReviewDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
