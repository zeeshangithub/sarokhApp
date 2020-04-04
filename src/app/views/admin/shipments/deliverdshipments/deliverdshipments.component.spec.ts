import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliverdshipmentsComponent } from './deliverdshipments.component';

describe('DeliverdshipmentsComponent', () => {
  let component: DeliverdshipmentsComponent;
  let fixture: ComponentFixture<DeliverdshipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliverdshipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverdshipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
