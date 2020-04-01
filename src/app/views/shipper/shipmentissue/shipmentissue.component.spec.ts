import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipmentissueComponent } from './shipmentissue.component';

describe('ShipmentissueComponent', () => {
  let component: ShipmentissueComponent;
  let fixture: ComponentFixture<ShipmentissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipmentissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipmentissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
