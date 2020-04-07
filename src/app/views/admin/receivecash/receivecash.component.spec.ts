import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivecashComponent } from './receivecash.component';

describe('ReceivecashComponent', () => {
  let component: ReceivecashComponent;
  let fixture: ComponentFixture<ReceivecashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivecashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivecashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
