import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulkshipmentComponent } from './bulkshipment.component';

describe('BulkshipmentComponent', () => {
  let component: BulkshipmentComponent;
  let fixture: ComponentFixture<BulkshipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulkshipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulkshipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
