import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../../../services/order.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  selectedId : any;
  selectedOrderData : any;
  selectedShipments: any;
  showrec = false;
  constructor(private router: Router, private route: ActivatedRoute , private getorderdetail : OrderService) {}

  ngOnInit(): void {
  this.selectedId = this.route.snapshot.params.id;

  this.getorderdetail.getOrderDetails(this.selectedId).subscribe(res => {
    console.log("res" , res)
    if (res){
      this.showrec = true;
    }
    this.selectedOrderData= res.data;
    this.selectedShipments = res.data.shipmentOrderItems
  })

  }

  cancleOrder() {
    this.router.navigate(['/orders/orders', '216513']);
  }

}
