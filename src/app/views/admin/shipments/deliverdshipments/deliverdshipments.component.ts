import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-deliverdshipments',
  templateUrl: './deliverdshipments.component.html',
  styleUrls: ['./deliverdshipments.component.css']
})
export class DeliverdshipmentsComponent implements OnInit {

  public deliverdShipments;

  constructor(private DeliverdShipments: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getDeliverdShipments();
  }
  viewOrder(id) {
    this.router.navigate(['shipment/vieworder', id]);
  }
  getDeliverdShipments() {
    this.DeliverdShipments.fetchDeliverdShipments().subscribe(res => {
      this.deliverdShipments = res.data
    })
  }

}
