import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceRecordsComponent } from './maintenance-records.component';

describe('MaintenanceRecordsComponent', () => {
  let component: MaintenanceRecordsComponent;
  let fixture: ComponentFixture<MaintenanceRecordsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceRecordsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceRecordsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
