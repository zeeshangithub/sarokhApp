import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-delivery-shipments',
  templateUrl: './delivery-shipments.component.html',
  styleUrls: ['./delivery-shipments.component.css']
})
export class DeliveryShipmentsComponent implements OnInit {

  public deliveryShipments;

  constructor(private DeliveryShipments: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getDeliveryShipments();
  }
  viewOrder(id) {
    this.router.navigate(['shipment/vieworder', id]);
  }
  getDeliveryShipments() {
    this.DeliveryShipments.fetchDeliveryShipments().subscribe(res => {
      this.deliveryShipments = res.data
    })
  }

}
