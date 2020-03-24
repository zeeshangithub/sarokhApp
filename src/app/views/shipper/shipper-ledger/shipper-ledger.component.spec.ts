import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperLedgerComponent } from './shipper-ledger.component';

describe('ShipperLedgerComponent', () => {
  let component: ShipperLedgerComponent;
  let fixture: ComponentFixture<ShipperLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipperLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipperLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
