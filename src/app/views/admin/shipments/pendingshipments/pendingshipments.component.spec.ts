import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingshipmentsComponent } from './pendingshipments.component';

describe('PendingshipmentsComponent', () => {
  let component: PendingshipmentsComponent;
  let fixture: ComponentFixture<PendingshipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingshipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingshipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
