import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnshipmentsComponent } from './returnshipments.component';

describe('ReturnshipmentsComponent', () => {
  let component: ReturnshipmentsComponent;
  let fixture: ComponentFixture<ReturnshipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnshipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnshipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
