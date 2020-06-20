import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-noresponseshipment',
  templateUrl: './noresponseshipment.component.html',
  styleUrls: ['./noresponseshipment.component.css']
})
export class NoresponseshipmentComponent implements OnInit {

  public noResponseShipments;

  constructor(private NoResponseShipments: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getNoResponseShipments();
  }
  viewOrder(id) {
    this.router.navigate(['shipment/vieworder', id]);
  }
  getNoResponseShipments() {
    this.NoResponseShipments.fetchNoResponseShipments().subscribe(res => {
      this.noResponseShipments = res.data
    })
  }

}
