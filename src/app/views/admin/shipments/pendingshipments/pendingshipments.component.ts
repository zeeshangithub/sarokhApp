import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pendingshipments',
  templateUrl: './pendingshipments.component.html',
  styleUrls: ['./pendingshipments.component.css']
})
export class PendingshipmentsComponent implements OnInit {

  public pendingShipments;

  constructor(private PendingShipments: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getPendingShipments();
  }
  viewOrder(id) {
    this.router.navigate(['shipment/vieworder', id]);
  }
  getPendingShipments() {
    this.PendingShipments.fetchPendingShipments().subscribe(res => {
      this.pendingShipments = res.data
    })
  }

}
