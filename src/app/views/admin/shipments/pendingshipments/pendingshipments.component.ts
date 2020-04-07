import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-pendingshipments',
  templateUrl: './pendingshipments.component.html',
  styleUrls: ['./pendingshipments.component.css']
})
export class PendingshipmentsComponent implements OnInit {

  public pendingShipments;

  constructor(private PendingShipments: AdminService) { }

  ngOnInit(): void {
    this.getPendingShipments();
  }

  getPendingShipments() {
    this.PendingShipments.fetchPendingShipments().subscribe(res => {
      this.pendingShipments = res.data
    })
  }

}
