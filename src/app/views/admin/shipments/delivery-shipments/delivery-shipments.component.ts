import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-delivery-shipments',
  templateUrl: './delivery-shipments.component.html',
  styleUrls: ['./delivery-shipments.component.css']
})
export class DeliveryShipmentsComponent implements OnInit {

  public deliveryShipments;

  constructor(private DeliveryShipments: AdminService) { }

  ngOnInit(): void {
    this.getDeliveryShipments();
  }

  getDeliveryShipments() {
    this.DeliveryShipments.fetchDeliveryShipments().subscribe(res => {
      this.deliveryShipments = res.data
    })
  }

}
