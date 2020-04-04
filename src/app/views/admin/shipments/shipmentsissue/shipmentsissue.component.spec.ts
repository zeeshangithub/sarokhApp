import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentsissueComponent } from './shipmentsissue.component';

describe('ShipmentsissueComponent', () => {
  let component: ShipmentsissueComponent;
  let fixture: ComponentFixture<ShipmentsissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentsissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentsissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
