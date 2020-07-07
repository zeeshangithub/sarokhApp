import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { OrderService } from '../../../services/order.service';
import { PrintService } from '../../../services/print.service';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  pickuplocation: any;
  deliverylocation: any;
  selectedId: any;
  selectedOrderData: any;
  selectedShipments: any;
  showrec = false;
  constructor(public printService: PrintService, private router: Router, private route: ActivatedRoute, private getorderdetail: OrderService) { }

  ngOnInit(): void {
    this.selectedId = this.route.snapshot.params.id;

    this.getorderdetail.getOrderDetails(this.selectedId).subscribe(res => {
      console.log("res", res)
      if (res) {
        this.showrec = true;
      }
      this.selectedOrderData = res.data;
      if (this.selectedOrderData.deliveryLocationDetail == null) {
        this.deliverylocation = this.selectedOrderData.deliveryLocation
      } else {
        this.deliverylocation = this.selectedOrderData.deliveryLocationDetail
      }
      if (this.selectedOrderData.pickupLocationDetail == null) {
        this.pickuplocation = this.selectedOrderData.pickupyLocation
      } else {
        this.pickuplocation = this.selectedOrderData.pickupLocationDetail
      }
      this.selectedShipments = res.data.shipmentOrderItems
    })

  }

  cancleOrder() {
    this.router.navigate(['/orders/orders', '216513']);
  }

  onPrintInvoice() {
    const invoiceIds = ['101'];
    this.printService
      .printDocument('invoice', invoiceIds);
  }

}
