import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-driver-payout',
  templateUrl: './driver-payout.component.html',
  styleUrls: ['./driver-payout.component.css']
})
export class DriverPayoutComponent implements OnInit {

  public driverPayout;

  constructor(private DriverPayout: AdminService) { }

  ngOnInit(): void {
    this.getDriverPayout();
  }

  getDriverPayout() {
    this.DriverPayout.fetchDriverPayout().subscribe(res => {
      this.driverPayout = res.data
    })
  }

}
