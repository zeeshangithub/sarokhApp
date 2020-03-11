import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShipmentUserComponent } from './add-shipment-user.component';

describe('AddShipmentUserComponent', () => {
  let component: AddShipmentUserComponent;
  let fixture: ComponentFixture<AddShipmentUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddShipmentUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddShipmentUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
