import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShipperwearhouselistComponent } from './shipperwearhouselist.component';

describe('ShipperwearhouselistComponent', () => {
  let component: ShipperwearhouselistComponent;
  let fixture: ComponentFixture<ShipperwearhouselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShipperwearhouselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShipperwearhouselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
