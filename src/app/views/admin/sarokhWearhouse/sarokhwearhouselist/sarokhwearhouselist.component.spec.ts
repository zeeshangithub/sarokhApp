import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SarokhwearhouselistComponent } from './sarokhwearhouselist.component';

describe('SarokhwearhouselistComponent', () => {
  let component: SarokhwearhouselistComponent;
  let fixture: ComponentFixture<SarokhwearhouselistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SarokhwearhouselistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SarokhwearhouselistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
