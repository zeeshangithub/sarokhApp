import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupShipmentsComponent } from './pickup-shipments.component';

describe('PickupShipmentsComponent', () => {
  let component: PickupShipmentsComponent;
  let fixture: ComponentFixture<PickupShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
