import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShipperLedgerComponent } from './add-shipper-ledger.component';

describe('AddShipperLedgerComponent', () => {
  let component: AddShipperLedgerComponent;
  let fixture: ComponentFixture<AddShipperLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShipperLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShipperLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
