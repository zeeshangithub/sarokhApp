import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReciveOrdersComponent } from './recive-orders.component';

describe('ReciveOrdersComponent', () => {
  let component: ReciveOrdersComponent;
  let fixture: ComponentFixture<ReciveOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReciveOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReciveOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
