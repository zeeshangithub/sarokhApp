import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-shippersbilling',
  templateUrl: './shippersbilling.component.html',
  styleUrls: ['./shippersbilling.component.css']
})
export class ShippersbillingComponent implements OnInit {

  public shippersBilling;

  constructor(private ShippersBilling: AdminService) { }

  ngOnInit(): void {
    this.getShippersBilling();
  }

  getShippersBilling() {
    this.ShippersBilling.fetchShippersBilling().subscribe(res => {
      this.shippersBilling = res.data
    })
  }

}
