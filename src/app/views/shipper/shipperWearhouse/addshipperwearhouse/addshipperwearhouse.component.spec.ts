import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshipperwearhouseComponent } from './addshipperwearhouse.component';

describe('AddshipperwearhouseComponent', () => {
  let component: AddshipperwearhouseComponent;
  let fixture: ComponentFixture<AddshipperwearhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddshipperwearhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshipperwearhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
