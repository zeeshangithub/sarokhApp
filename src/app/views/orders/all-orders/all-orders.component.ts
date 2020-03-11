import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

declare var $;

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit, AfterViewInit {

  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};
  orders:any= [];
  constructor(private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {
    this.dtOption = {
      "paging": true,
      "ordering": true,
      "info": true
    };

    this.fetchOrders();
  }
  ngAfterViewInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOption);
  }

  viewOrder() {
    this.router.navigate(['orders/vieworder', '216513']);
  }

  addOrder(){
    this.router.navigate(['orders/add']);
  }

  fetchOrders () {
    this.adminService.fetchOrdersList().subscribe( res => {

      console.log("res" , res.data)


     res.data.forEach(element => {
       this.orders.push(element.shipmentOrder)
      // console.log("order" , element.shipmentOrder)
      // this.orders = element.shipmentOrder;
     }); 
      console.log("this.orders" , this.orders)
    })
  }

}
