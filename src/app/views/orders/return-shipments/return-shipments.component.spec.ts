import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnShipmentsComponent } from './return-shipments.component';

describe('ReturnShipmentsComponent', () => {
  let component: ReturnShipmentsComponent;
  let fixture: ComponentFixture<ReturnShipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnShipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnShipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
