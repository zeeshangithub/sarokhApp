import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shipmentsissue',
  templateUrl: './shipmentsissue.component.html',
  styleUrls: ['./shipmentsissue.component.css']
})
export class ShipmentsissueComponent implements OnInit {

  public shipmentIssues;

  constructor(private ShipmentIssues: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getShipmentIssues();
  }
  viewOrder(id) {
    this.router.navigate(['shipment/vieworder', id]);
  }
  getShipmentIssues() {
    this.ShipmentIssues.fetchShipmentIssues().subscribe(res => {
      this.shipmentIssues = res.data
    })
  }

}
