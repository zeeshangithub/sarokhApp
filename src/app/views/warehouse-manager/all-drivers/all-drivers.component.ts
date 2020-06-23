import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../../../services/driver.service';

@Component({
  selector: 'app-all-drivers',
  templateUrl: './all-drivers.component.html',
  styleUrls: ['./all-drivers.component.css']
})
export class AllDriversComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};
  driverList: any;
  constructor(private router: Router,
    private driverservice: DriverService
  ) { }


  ngOnInit(): void {
    this.dtOption = {
      "paging": true,
      "ordering": true,
      "info": true
    };

    this.getDriverList();
  }
  getDriverList() {
    this.driverservice.GetDriverList().subscribe(res => {
      console.log("this.driverList", res)
      this.driverList = res;
    })
  }

}
