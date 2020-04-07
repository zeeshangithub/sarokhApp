import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DriverService } from '../../../../services/driver.service';
import { DataService } from '../../../../services/data.service';

@Component({
  selector: 'app-alldrivers',
  templateUrl: './alldrivers.component.html',
  styleUrls: ['./alldrivers.component.css']
})
export class AlldriversComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};
  driverList: any;
  constructor(private router: Router,
    private driverservice: DriverService , private shareData : DataService
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
      // console.log("this.driverList", this.driverList)
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
  editDriver(id){
    console.log("id" , id)
    this.shareData.setID(id);
    this.router.navigate(['/admin/adddriver/']);
  }

}
