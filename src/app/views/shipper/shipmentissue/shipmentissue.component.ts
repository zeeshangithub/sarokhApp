import { Component, OnInit } from '@angular/core';
import { ShipperService } from '../../../services/shipper.service';

@Component({
  selector: 'app-shipmentissue',
  templateUrl: './shipmentissue.component.html',
  styleUrls: ['./shipmentissue.component.css']
})
export class ShipmentissueComponent implements OnInit {

  public shipmentIssues;
  constructor(private shipmentIssue: ShipperService) { }

  ngOnInit(): void {
    this.getShipperIssues();
  }

  getShipperIssues() {
    this.shipmentIssue.fetchShipmentIssues().subscribe(res => {
      this.shipmentIssues = res.data
    })
  }
}
