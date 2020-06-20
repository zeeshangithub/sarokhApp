import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prepeaidshipments',
  templateUrl: './prepeaidshipments.component.html',
  styleUrls: ['./prepeaidshipments.component.css']
})
export class PrepeaidshipmentsComponent implements OnInit {

  public prepaidShipments;

  constructor(private PrepaidShipments: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getPrepaidShipments();
  }
  viewOrder(id) {
    this.router.navigate(['shipment/vieworder', id]);
  }
  getPrepaidShipments() {
    this.PrepaidShipments.fetchPrepaidShipments().subscribe(res => {
      this.prepaidShipments = res.data
    })
  }

}
