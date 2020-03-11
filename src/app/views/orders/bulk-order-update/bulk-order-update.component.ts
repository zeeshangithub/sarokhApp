import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';
import { Order } from '../../../interfaces/order';

@Component({
  selector: 'app-bulk-order-update',
  templateUrl: './bulk-order-update.component.html',
  styleUrls: ['./bulk-order-update.component.css']
})
export class BulkOrderUpdateComponent implements OnInit {

  orders: any;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
    this.fetchOrder();
  }

  fetchOrder(){
    this.adminService.fetchOrderByType('BULK_ORDERS').subscribe( res => {
      if(res && res.data){
        this.orders = res.data;
      }
    })
  }

}
