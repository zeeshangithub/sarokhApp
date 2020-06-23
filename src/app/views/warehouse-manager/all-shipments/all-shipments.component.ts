import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-shipments',
  templateUrl: './all-shipments.component.html',
  styleUrls: ['./all-shipments.component.css']
})
export class AllShipmentsComponent implements OnInit {

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
