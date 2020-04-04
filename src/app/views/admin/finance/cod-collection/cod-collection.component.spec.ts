import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodCollectionComponent } from './cod-collection.component';

describe('CodCollectionComponent', () => {
  let component: CodCollectionComponent;
  let fixture: ComponentFixture<CodCollectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodCollectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
