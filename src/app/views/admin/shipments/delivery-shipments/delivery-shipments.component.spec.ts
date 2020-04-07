import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryShipmentsComponent } from './delivery-shipments.component';

describe('DeliveryShipmentsComponent', () => {
  let component: DeliveryShipmentsComponent;
  let fixture: ComponentFixture<DeliveryShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeliveryShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliveryShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
