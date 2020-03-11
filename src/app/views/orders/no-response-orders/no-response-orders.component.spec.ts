import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoResponseOrdersComponent } from './no-response-orders.component';

describe('NoResponseOrdersComponent', () => {
  let component: NoResponseOrdersComponent;
  let fixture: ComponentFixture<NoResponseOrdersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoResponseOrdersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoResponseOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
