import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryordersComponent } from './deliveryorders.component';

describe('DeliveryordersComponent', () => {
  let component: DeliveryordersComponent;
  let fixture: ComponentFixture<DeliveryordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
