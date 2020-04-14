import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { DriverService } from '../../../services/driver.service';

@Component({
  selector: 'app-dispatch-orders',
  templateUrl: './dispatch-orders.component.html',
  styleUrls: ['./dispatch-orders.component.css']
})
export class DispatchOrdersComponent implements OnInit {

  inputTracking: string = '';
  showAssignCard = false;
  cardId: string = '';
  shipments = [];
  formData;
  driverList;
  constructor(private getdatabyTrackingNo: OrderService, private toast: ToastrService,
    private driverService : DriverService
    ) { }

  ngOnInit(): void {

    this.driverService.GetDriverList().subscribe(res =>{
      this.driverList = res
      console.log(res)
    })
  }
  enterInputTracking() {
    if (this.inputTracking === "") {
      this.toast.error("Please Enter Tracking No");
    } else {
      this.getdatabyTrackingNo.getshipmentByTrackingNo(this.inputTracking).subscribe(res => {
        console.log(res)
        if (res) {
          this.showAssignCard = true;
        }
        this.shipments.push(res.data)
      })
    }
  }
  assignDriver(val) {
    this.formData = {
      assignCard: true,
      driverId: val,
      trackingNumber: this.inputTracking,
    }
    if (val === "") {
      this.toast.error("Please Enter Tracking No");
    } else {
      console.log("this.formData", this.formData)
      this.getdatabyTrackingNo.assignDriverBy(this.formData).subscribe(res => {
        if (res.status === 200) {
          this.toast.success(res.message)
          this.cardId = '';
          this.inputTracking = '';
        }
      })
    }
  }
}
