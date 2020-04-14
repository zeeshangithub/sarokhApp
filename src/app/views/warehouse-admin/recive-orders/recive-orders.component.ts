import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recive-orders',
  templateUrl: './recive-orders.component.html',
  styleUrls: ['./recive-orders.component.css']
})
export class ReciveOrdersComponent implements OnInit {

  inputTracking: string = '';
  showAssignCard = false;
  cardId: string = '';
  shipments = [];
  formData;
  constructor(private getdatabyTrackingNo: OrderService, private toast: ToastrService) { }

  ngOnInit(): void {
  }
  enterInputTracking() {
    if (this.inputTracking === "") {
      this.toast.error("Please Enter Tracking No");
    } else {
      this.getdatabyTrackingNo.getshipmentByTrackingNo(this.inputTracking).subscribe(res => {
        console.log(res)
        if (res) {
          this.showAssignCard = true;
        }
        this.shipments.push(res.data)
      })
    }
  }
  assginCard() {
    this.formData = {
      assignCard: true,
      cardNumber: this.cardId,
      trackingNumber: this.inputTracking,
    }
    if (this.cardId === "") {
      this.toast.error("Please Enter Tracking No");
    } else {
      console.log("this.formData", this.formData)
      this.getdatabyTrackingNo.assignCardBy(this.formData).subscribe(res => {
        if (res.status === 200) {
          this.toast.success(res.message)
          this.cardId = '';
          this.inputTracking = '';
        }
      })
    }
  }
}
