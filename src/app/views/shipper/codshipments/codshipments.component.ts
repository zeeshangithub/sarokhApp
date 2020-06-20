import { Component, OnInit } from '@angular/core';
import { ShipperService } from '../../../services/shipper.service';
import { Router } from '@angular/router';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-codshipments',
  templateUrl: './codshipments.component.html',
  styleUrls: ['./codshipments.component.css']
})
export class CodshipmentsComponent implements OnInit {

  public codShipmentList;

  constructor(private inventory: ShipperService, private router: Router, ) { }


  ngOnInit(): void {
    this.getcodShipmentList();
  }
  viewOrder(id) {
    this.router.navigate(['shipment/vieworder', id]);
  }
  getcodShipmentList() {
    this.inventory.fetchCodShipment().subscribe(res => {
      this.codShipmentList = res.data
    })
  }

}
