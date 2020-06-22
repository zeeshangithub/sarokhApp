import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseManagerDashboardComponent } from './warehouse-manager-dashboard.component';

describe('WarehouseManagerDashboardComponent', () => {
  let component: WarehouseManagerDashboardComponent;
  let fixture: ComponentFixture<WarehouseManagerDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarehouseManagerDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarehouseManagerDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
