import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodshipmentsComponent } from './codshipments.component';

describe('CodshipmentsComponent', () => {
  let component: CodshipmentsComponent;
  let fixture: ComponentFixture<CodshipmentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodshipmentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodshipmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
