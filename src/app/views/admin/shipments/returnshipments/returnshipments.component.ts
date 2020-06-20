import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-returnshipments',
  templateUrl: './returnshipments.component.html',
  styleUrls: ['./returnshipments.component.css']
})
export class ReturnshipmentsComponent implements OnInit {

  public returnedShipments;

  constructor(private ReturnedShipments: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getReturnedShipments();
  }
  viewOrder(id) {
    this.router.navigate(['shipment/vieworder', id]);
  }
  getReturnedShipments() {
    this.ReturnedShipments.fetchReturnedShipments().subscribe(res => {
      this.returnedShipments = res.data
    })
  }

}
