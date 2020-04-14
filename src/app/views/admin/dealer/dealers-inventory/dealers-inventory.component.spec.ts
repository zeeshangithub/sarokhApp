import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealersInventoryComponent } from './dealers-inventory.component';

describe('DealersInventoryComponent', () => {
  let component: DealersInventoryComponent;
  let fixture: ComponentFixture<DealersInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealersInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealersInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
