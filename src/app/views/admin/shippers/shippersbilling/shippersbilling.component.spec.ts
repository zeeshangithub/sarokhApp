import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippersbillingComponent } from './shippersbilling.component';

describe('ShippersbillingComponent', () => {
  let component: ShippersbillingComponent;
  let fixture: ComponentFixture<ShippersbillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippersbillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippersbillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
