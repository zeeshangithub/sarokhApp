import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { AllshipmentsService } from '../../../services/allshipments.service';
import { OrderService } from '../../../services/order.service';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
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
  orders: any;
  showlisting  : boolean = true;
  constructor(private allShipments: AllshipmentsService ,  private orderService: OrderService ,
    private router: Router,    private shareData : DataService) { }
  ngOnInit(): void {
    this.fetchAllShipments();
  }
  fetchAllShipments() {
 
    let shipperId =  localStorage.getItem('id')
    console.log(shipperId)
    this.allShipments.fetchAllShipments(shipperId).subscribe(res => {
      this.shipments = res.data;
      console.log("this.shipments" , this.shipments)
    })
  }
  deleteOrder(id){
    this.orderService.deleteOrder(id).subscribe(res => {
      console.log("res" , res.status)
      if(res.status === 200){
        
        this.router.routeReuseStrategy.shouldReuseRoute = () => true;
      }
    })
  }
  editOrder(id , e : boolean){
    // this.showlisting = e;
    // debugger
    this.shareData.setID(id);
    // localStorage.setItem('id',id )
    this.router.navigate(['/orders/add']);
    
  }
}
