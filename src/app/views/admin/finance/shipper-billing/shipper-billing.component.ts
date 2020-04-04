import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-shipper-billing',
  templateUrl: './shipper-billing.component.html',
  styleUrls: ['./shipper-billing.component.css']
})
export class ShipperBillingComponent implements OnInit {

  public shipperBilling;

  constructor(private ShipperBilling: AdminService) { }

  ngOnInit(): void {
    this.getShipperBilling();
  }

  getShipperBilling() {
    this.ShipperBilling.fetchShipperBilling().subscribe(res => {
      this.shipperBilling = res.data
    })
  }

}
