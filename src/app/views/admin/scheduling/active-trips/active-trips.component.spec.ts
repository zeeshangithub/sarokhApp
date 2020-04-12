import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveTripsComponent } from './active-trips.component';

describe('ActiveTripsComponent', () => {
  let component: ActiveTripsComponent;
  let fixture: ComponentFixture<ActiveTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActiveTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActiveTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
