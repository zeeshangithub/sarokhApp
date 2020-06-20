import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { AllshipmentsService } from '../../../services/allshipments.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-returnshipments',
  templateUrl: './returnshipments.component.html',
  styleUrls: ['./returnshipments.component.css']
})
export class ReturnshipmentsComponent implements OnInit {
  pendingshipments;
  // shipments;
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};

  constructor(private allShipments: AllshipmentsService, private router: Router) { }
  ngOnInit(): void {
    this.fetchAllShipments();
  }
  viewOrder(id) {
    this.router.navigate(['shipment/vieworder', id]);
  }
  fetchAllShipments() {
    localStorage
    let shipperId = localStorage.getItem('id')
    console.log(shipperId)
    this.allShipments.fetchAllPendingOders(shipperId).subscribe(res => {
      this.pendingshipments = res.data;
      console.log("this.shipments", this.pendingshipments)

    })
  }
}
