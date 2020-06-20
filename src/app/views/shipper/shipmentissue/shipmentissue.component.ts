import { Component, OnInit } from '@angular/core';
import { ShipperService } from '../../../services/shipper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipmentissue',
  templateUrl: './shipmentissue.component.html',
  styleUrls: ['./shipmentissue.component.css']
})
export class ShipmentissueComponent implements OnInit {

  public shipmentIssues;
  constructor(private shipmentIssue: ShipperService, private router: Router) { }

  ngOnInit(): void {
    this.getShipperIssues();
  }
  viewOrder(id) {
    this.router.navigate(['orders/vieworder', id]);
  }
  getShipperIssues() {
    this.shipmentIssue.fetchShipmentIssues().subscribe(res => {
      this.shipmentIssues = res.data
    })
  }
}
