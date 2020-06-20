import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-allshipments',
  templateUrl: './allshipments.component.html',
  styleUrls: ['./allshipments.component.css']
})
export class AllshipmentsComponent implements OnInit {

  public allShipments;

  constructor(private AllShipments: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getAllShipments();
  }
  viewOrder(id) {
    this.router.navigate(['shipment/vieworder', id]);
  }
  getAllShipments() {
    this.AllShipments.fetchAllShipments().subscribe(res => {
      this.allShipments = res.data
    })
  }

}
