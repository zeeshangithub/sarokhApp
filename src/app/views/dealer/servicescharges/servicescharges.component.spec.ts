import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceschargesComponent } from './servicescharges.component';

describe('ServiceschargesComponent', () => {
  let component: ServiceschargesComponent;
  let fixture: ComponentFixture<ServiceschargesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceschargesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceschargesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
