import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-pickup-shipments',
  templateUrl: './pickup-shipments.component.html',
  styleUrls: ['./pickup-shipments.component.css']
})
export class PickupShipmentsComponent implements OnInit {

  public pickupShipments;

  constructor(private PickupShipments: AdminService) { }

  ngOnInit(): void {
    this.getPickupShipments();
  }

  getPickupShipments() {
    this.PickupShipments.fetchPickupShipments().subscribe(res => {
      this.pickupShipments = res.data
    })
  }

}
