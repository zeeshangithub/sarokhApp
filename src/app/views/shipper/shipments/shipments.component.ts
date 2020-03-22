import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { AllshipmentsService } from '../../../services/allshipments.service';
declare var $;
@Component({
  selector: 'app-shipments',
  templateUrl: './shipments.component.html',
  styleUrls: ['./shipments.component.css']
})
export class ShipmentsComponent implements OnInit {
  shipments;
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
    this.allShipments.fetchAllShipments(shipperId).subscribe(res => {
      this.shipments = res.data;
      console.log("this.shipments" , this.shipments)
 
    })
  }
}
