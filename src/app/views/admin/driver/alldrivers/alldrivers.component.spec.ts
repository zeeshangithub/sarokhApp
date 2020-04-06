import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlldriversComponent } from './alldrivers.component';

describe('AlldriversComponent', () => {
  let component: AlldriversComponent;
  let fixture: ComponentFixture<AlldriversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlldriversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlldriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
