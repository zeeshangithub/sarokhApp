import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintbulkshipmentComponent } from './printbulkshipment.component';

describe('PrintbulkshipmentComponent', () => {
  let component: PrintbulkshipmentComponent;
  let fixture: ComponentFixture<PrintbulkshipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintbulkshipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintbulkshipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
