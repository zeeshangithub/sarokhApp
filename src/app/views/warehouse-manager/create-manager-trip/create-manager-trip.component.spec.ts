import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateManagerTripComponent } from './create-manager-trip.component';

describe('CreateManagerTripComponent', () => {
  let component: CreateManagerTripComponent;
  let fixture: ComponentFixture<CreateManagerTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateManagerTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateManagerTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
