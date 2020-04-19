import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsarokhwearhouseComponent } from './addsarokhwearhouse.component';

describe('AddsarokhwearhouseComponent', () => {
  let component: AddsarokhwearhouseComponent;
  let fixture: ComponentFixture<AddsarokhwearhouseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsarokhwearhouseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsarokhwearhouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
