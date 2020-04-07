import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-shipmentsissue',
  templateUrl: './shipmentsissue.component.html',
  styleUrls: ['./shipmentsissue.component.css']
})
export class ShipmentsissueComponent implements OnInit {

  public shipmentIssues;

  constructor(private ShipmentIssues: AdminService) { }

  ngOnInit(): void {
    this.getShipmentIssues();
  }

  getShipmentIssues() {
    this.ShipmentIssues.fetchShipmentIssues().subscribe(res => {
      this.shipmentIssues = res.data
    })
  }

}
