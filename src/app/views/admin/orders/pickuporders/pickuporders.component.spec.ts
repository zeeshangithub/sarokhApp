import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupordersComponent } from './pickuporders.component';

describe('PickupordersComponent', () => {
  let component: PickupordersComponent;
  let fixture: ComponentFixture<PickupordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PickupordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PickupordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
