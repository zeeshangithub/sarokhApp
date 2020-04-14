import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceiverDropOffComponent } from './receiver-drop-off.component';

describe('ReceiverDropOffComponent', () => {
  let component: ReceiverDropOffComponent;
  let fixture: ComponentFixture<ReceiverDropOffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceiverDropOffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceiverDropOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
