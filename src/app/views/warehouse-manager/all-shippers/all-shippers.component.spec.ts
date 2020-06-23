import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllShippersComponent } from './all-shippers.component';

describe('AllShippersComponent', () => {
  let component: AllShippersComponent;
  let fixture: ComponentFixture<AllShippersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllShippersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllShippersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
