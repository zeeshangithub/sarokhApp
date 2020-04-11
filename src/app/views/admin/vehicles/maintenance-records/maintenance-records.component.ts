import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-maintenance-records',
  templateUrl: './maintenance-records.component.html',
  styleUrls: ['./maintenance-records.component.css']
})
export class MaintenanceRecordsComponent implements OnInit {

  private maintenanceRecord;

  constructor(private MaintenanceRecord: AdminService) { }

  ngOnInit(): void {
    this.getMaintenanceRecord();
  }

  getMaintenanceRecord() {
    this.MaintenanceRecord.fetchMaintenanceRecord().subscribe(res => {
      this.maintenanceRecord = res.data
    })
  }

}
