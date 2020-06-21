import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { ToastrService } from 'ngx-toastr';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { WarehouseService } from '../../../services/warehouse.service';

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
  warehouses;
  reciveOrderForm: FormGroup

  constructor(private getWarehouseService: WarehouseService, private getdatabyTrackingNo: OrderService, private toast: ToastrService, private formbuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getWarehouseService.fetchSarokhWarehouses().subscribe(res => {
      this.warehouses = res.data.warehouseList
    })
    this.reciveOrderForm = this.formbuilder.group({
      assignCard: ['',],
      cardNumber: ['',],
      trackingNumber: ['',],
      warehouseId: ['',]

    })

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
        // this.shipments.push(res.data)
      })
    }
  }
  submit() {
    // this.formData = {
    //   assignCard: true,
    //   cardNumber: this.cardId,
    //   trackingNumber: this.inputTracking,
    // }

    // if (this.reciveOrderForm.cardNumber.value === "") {
    //   this.toast.error("Please Enter Tracking No");
    // } else {

    this.reciveOrderForm.get("assignCard").setValue("true"),
      this.reciveOrderForm.get("trackingNumber").setValue(this.inputTracking)
    console.log("this.formData", this.reciveOrderForm.value)
    this.getdatabyTrackingNo.assignCardBy(this.reciveOrderForm.value).subscribe(res => {
      if (res.status === 200) {
        this.toast.success(res.message)
        this.cardId = '';
        this.inputTracking = '';
        this.shipments.push(res.data)
      }
    })
  }
}
// }
