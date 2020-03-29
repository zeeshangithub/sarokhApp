import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewdealerpointComponent } from './viewdealerpoint.component';

describe('ViewdealerpointComponent', () => {
  let component: ViewdealerpointComponent;
  let fixture: ComponentFixture<ViewdealerpointComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewdealerpointComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewdealerpointComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
