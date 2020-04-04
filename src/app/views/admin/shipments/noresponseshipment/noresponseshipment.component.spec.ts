import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoresponseshipmentComponent } from './noresponseshipment.component';

describe('NoresponseshipmentComponent', () => {
  let component: NoresponseshipmentComponent;
  let fixture: ComponentFixture<NoresponseshipmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoresponseshipmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoresponseshipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
