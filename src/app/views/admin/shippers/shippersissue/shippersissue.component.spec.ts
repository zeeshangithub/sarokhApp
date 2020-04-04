import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippersissueComponent } from './shippersissue.component';

describe('ShippersissueComponent', () => {
  let component: ShippersissueComponent;
  let fixture: ComponentFixture<ShippersissueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippersissueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippersissueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
