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
  constructor(private getyids: OrderService) { }

  ngOnInit(): void {

    this.getyids.getOrderIDs(localStorage.getItem('id')).subscribe(res => {
      console.log(res.data);
      this.trackingNos = res.data;
    })
  }
  fetchDetails(val) {
    console.log(val);
    const value = val.
      this.getyids.searchShipment(val).subscribe(res => {
        console.log(res)
        this.resquesteddata = res.data;
        console.log(this.resquesteddata)
      })
  }
}
