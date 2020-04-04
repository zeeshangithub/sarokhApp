import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPayoutComponent } from './driver-payout.component';

describe('DriverPayoutComponent', () => {
  let component: DriverPayoutComponent;
  let fixture: ComponentFixture<DriverPayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverPayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
