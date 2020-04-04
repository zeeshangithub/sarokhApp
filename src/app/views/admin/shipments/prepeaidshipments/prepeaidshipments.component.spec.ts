import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrepeaidshipmentsComponent } from './prepeaidshipments.component';

describe('PrepeaidshipmentsComponent', () => {
  let component: PrepeaidshipmentsComponent;
  let fixture: ComponentFixture<PrepeaidshipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrepeaidshipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrepeaidshipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
