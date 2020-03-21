import { Component, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MatSort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { AdminService } from '../../../services/admin.service';

import { DataSource } from '@angular/cdk/collections';
import { Order } from '../../../interfaces/order'
declare var $;

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class AllOrdersComponent implements OnInit {

  orders: any;
  showlisting  : boolean = true;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  public dataSource = new MatTableDataSource<AdminService>(this.orders);
  columnsToDisplay = ['orderId', 'orderPickupType', 'shipmentType', 'deliveryPersonName', 'deliveryPersonContact','actions'];
  expandedElement: Order | null;
  ngOnInit(): void {
    this.fetchOrders();
    this.adminService.fetchOrdersList().subscribe(res => {

      console.log("res", res.data)

      this.orders = res.data;
      this.dataSource = new MatTableDataSource<AdminService>(this.orders);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      console.log("this.orders", this.orders)
    })

  }

  constructor(private router: Router, private adminService: AdminService) { }


  fetchOrders() {

  }




  // @ViewChild('dataTable') table;
  // dataTable: any;
  // dtOption: any = {};
  // orders:any= [];
  // constructor(private router: Router, private adminService: AdminService) { }

  // ngOnInit(): void {
  // this.dtOption = {
  //   "paging": true,
  //   "ordering": true,
  //   "info": true
  // }; 
  // }

  //   this.fetchOrders();
  // }
  // ngAfterViewInit() {
  //   this.dataTable = $(this.table.nativeElement);
  //   this.dataTable.DataTable(this.dtOption);
  // }

  viewOrder() {
    this.router.navigate(['orders/vieworder', '216513']);
  }
  addNew(e){
    this.showlisting = e
  }
  // addOrder(){
  //   this.router.navigate(['orders/add']);
  // }

  // fetchOrders () {
  //   this.adminService.fetchOrdersList().subscribe( res => {

  //     console.log("res" , res.data)

  //     this.orders = res.data;

  //     console.log("this.orders" , this.orders)
  //   })
  // }

}