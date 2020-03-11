import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkOrderUpdateComponent } from './bulk-order-update.component';

describe('BulkOrderUpdateComponent', () => {
  let component: BulkOrderUpdateComponent;
  let fixture: ComponentFixture<BulkOrderUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkOrderUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkOrderUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
