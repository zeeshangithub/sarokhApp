import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodLedgersComponent } from './cod-ledgers.component';

describe('CodLedgersComponent', () => {
  let component: CodLedgersComponent;
  let fixture: ComponentFixture<CodLedgersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodLedgersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodLedgersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
