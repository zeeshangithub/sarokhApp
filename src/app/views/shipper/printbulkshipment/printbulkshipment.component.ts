import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../services/order.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-printbulkshipment',
  templateUrl: './printbulkshipment.component.html',
  styleUrls: ['./printbulkshipment.component.css']
})
export class PrintbulkshipmentComponent implements OnInit {
  trackingNos;
  createbulkshipmentform: FormGroup;
  pdfurl;
  show = false;
  public printbulkshipment;

  constructor(private orderService: OrderService, private formbuilder: FormBuilder, ) { }

  ngOnInit(): void {
    this.initializeCreateForm();
    this.orderService.getOrderIDs(localStorage.getItem('_id')).subscribe(res => {
      console.log(res.data);
      this.trackingNos = res.data;
    })
  }
  initializeCreateForm() {
    this.createbulkshipmentform = this.formbuilder.group({
      startTrackingNumber: [''],
      endTrackingNumber: ['']
    })
  }
  printBulkShipments() {
    console.log("dsfdsf", this.createbulkshipmentform.value)
    this.orderService.printBulkShipment(this.createbulkshipmentform.value).subscribe(res => {
      this.pdfurl = res.data
      this.show = true
    })
  }
}
