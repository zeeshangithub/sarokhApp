import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../../../services/driver.service';
declare var $;
@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})
export class DriversComponent implements OnInit {
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
      this.driverList = res;
      console.log("this.driverList", this.driverList)
    })
  }

  DeleteDriver(id) {
    this.driverservice.DeleteDriver(id).subscribe(res => {

      console.log("res", res)
      if (res.status === 200) {
        this.getDriverList();
      }
    })
  }

}
