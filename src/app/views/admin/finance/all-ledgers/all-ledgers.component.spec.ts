import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllLedgersComponent } from './all-ledgers.component';

describe('AllLedgersComponent', () => {
  let component: AllLedgersComponent;
  let fixture: ComponentFixture<AllLedgersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllLedgersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllLedgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
