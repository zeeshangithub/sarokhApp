import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-codshipments',
  templateUrl: './codshipments.component.html',
  styleUrls: ['./codshipments.component.css']
})
export class CodshipmentsComponent implements OnInit {

  public codShipments;

  constructor(private CodShipments: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getCodShipments();
  }
  viewOrder(id) {
    this.router.navigate(['shipment/vieworder', id]);
  }
  getCodShipments() {
    this.CodShipments.fetchCodShipments().subscribe(res => {
      this.codShipments = res.data
    })
  }

}
