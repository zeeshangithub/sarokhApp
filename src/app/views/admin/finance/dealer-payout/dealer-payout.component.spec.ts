import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealerPayoutComponent } from './dealer-payout.component';

describe('DealerPayoutComponent', () => {
  let component: DealerPayoutComponent;
  let fixture: ComponentFixture<DealerPayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealerPayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealerPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
