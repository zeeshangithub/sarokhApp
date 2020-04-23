import { Component, OnInit } from '@angular/core';
import { ShipperService } from '../../../services/shipper.service';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-printlables',
  templateUrl: './printlables.component.html',
  styleUrls: ['./printlables.component.css']
})
export class PrintlablesComponent implements OnInit {
  trackingNos;
  showData = false;
  resquesteddata;
  shimentorderDetail
  imgsrc;
  qrsrc;

  show = false;
  constructor(private getyids: OrderService) { }

  ngOnInit(): void {

    this.getyids.getOrderIDs(localStorage.getItem('id')).subscribe(res => {
      console.log(res.data);
      this.trackingNos = res.data;
    })
  }
  fetchDetails(val) {
    // debugger;
    console.log(val);

    this.getyids.searchShipment(val).subscribe(res => {
      console.log(res)
      if (res) {
        this.show = true;
        this.resquesteddata = res.data;
        this.shimentorderDetail = res.data.shipmentOrderItems[0];
        this.imgsrc = this.shimentorderDetail.barCode;
        this.qrsrc = this.shimentorderDetail.qrcode;
      }
      console.log(this.qrsrc)
      console.log(this.imgsrc)
      console.log(this.resquesteddata)
    })
  }
}
