import { Component, OnInit, ViewChild } from '@angular/core';
import { AllshipmentsService } from '../../../services/allshipments.service';

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.css']
})
export class PendingOrderComponent implements OnInit {
  pendingshipments;
  // shipments;
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};

  constructor(private allShipments: AllshipmentsService) { }
  ngOnInit(): void {
    this.fetchAllShipments();
  }
  fetchAllShipments() {
    localStorage
    let shipperId =  localStorage.getItem('id')
    console.log(shipperId)
    this.allShipments.fetchAllPendingOders(shipperId).subscribe(res => {
      this.pendingshipments = res.data;
      console.log("this.shipments" , this.pendingshipments)
 
    })
  }
}
