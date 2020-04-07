import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispensecashComponent } from './dispensecash.component';

describe('DispensecashComponent', () => {
  let component: DispensecashComponent;
  let fixture: ComponentFixture<DispensecashComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispensecashComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispensecashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
