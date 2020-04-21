import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintlablesComponent } from './printlables.component';

describe('PrintlablesComponent', () => {
  let component: PrintlablesComponent;
  let fixture: ComponentFixture<PrintlablesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintlablesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintlablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
