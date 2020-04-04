import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperBillingComponent } from './shipper-billing.component';

describe('ShipperBillingComponent', () => {
  let component: ShipperBillingComponent;
  let fixture: ComponentFixture<ShipperBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipperBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipperBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
