import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodreturnsComponent } from './codreturns.component';

describe('CodreturnsComponent', () => {
  let component: CodreturnsComponent;
  let fixture: ComponentFixture<CodreturnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodreturnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodreturnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
