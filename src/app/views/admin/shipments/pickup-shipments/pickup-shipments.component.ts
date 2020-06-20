import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pickup-shipments',
  templateUrl: './pickup-shipments.component.html',
  styleUrls: ['./pickup-shipments.component.css']
})
export class PickupShipmentsComponent implements OnInit {

  public pickupShipments;

  constructor(private PickupShipments: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getPickupShipments();
  }
  viewOrder(id) {
    this.router.navigate(['shipment/vieworder', id]);
  }
  getPickupShipments() {
    this.PickupShipments.fetchPickupShipments().subscribe(res => {
      this.pickupShipments = res.data
    })
  }

}
