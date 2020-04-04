import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllshipmentsComponent } from './allshipments.component';

describe('AllshipmentsComponent', () => {
  let component: AllshipmentsComponent;
  let fixture: ComponentFixture<AllshipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllshipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllshipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
