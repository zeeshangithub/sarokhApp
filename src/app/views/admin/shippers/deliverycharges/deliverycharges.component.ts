import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-deliverycharges',
  templateUrl: './deliverycharges.component.html',
  styleUrls: ['./deliverycharges.component.css']
})
export class DeliverychargesComponent implements OnInit {
  finalresponse: any = [];
  public shipperList;
  shipperId;
  chargesForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private shipperDetailList: AdminService, ) { }
  ngOnInit(): void {
    this.getShipperList();
    this.initializeDeliveryChargesForm();
  }
  initializeDeliveryChargesForm() {
    this.chargesForm = this.formbuilder.group({
      shipperDetail: [''],
      chargesTypePoint: ['PUDO'],
      codchargesPoint: ['', [Validators.required]],
      returnChargesPoint: ['', [Validators.required]],
      idPoint: ['', [Validators.required]],
      shipperIdPoint: ['', [Validators.required]],
      weightFiveToTenPoint: ['', [Validators.required]],
      weightTenToFifteenPoint: ['', [Validators.required]],
      weightUptoFiveKgPoint: ['', [Validators.required]],
      chargesType: ['Last Mile'],
      codcharges: ['', [Validators.required]],
      returnCharges: ['', [Validators.required]],
      id: ['', [Validators.required]],
      shipper: ['', [Validators.required]],
      weightFiveToTen: ['', [Validators.required]],
      weightTenToFifteen: ['', [Validators.required]],
      weightUptoFiveKg: ['', [Validators.required]],
    })
  }
  getShipperList() {
    this.shipperDetailList.fetchAllShippers().subscribe(res => {
      this.shipperList = res;
    })
  }
  submit() {
    debugger;
    let fullFormData = {
      "lastMileDelivery": {
        "chargesType": this.chargesForm.controls['chargesType'],
        "codcharges": this.chargesForm.controls['codcharges'],
        "id": this.chargesForm.controls['id'],
        "returnCharges": this.chargesForm.controls['returnCharges'],
        "shipperId": this.chargesForm.controls['shipperId'],
        "weightFiveToTen": this.chargesForm.controls['weightFiveToTen'],
        "weightTenToFifteen": this.chargesForm.controls['weightTenToFifteen'],
        "weightUptoFiveKg": this.chargesForm.controls['weightUptoFiveKg']
      },
      "pointDelivery": {
        "chargesType": this.chargesForm.controls['chargesTypePoint'],
        "codcharges": this.chargesForm.controls['codchargesPoint'],
        "id": this.chargesForm.controls['idPoint'],
        "returnCharges": this.chargesForm.controls['returnChargesPoint'],
        "shipperId": this.chargesForm.controls['shipperIdPoint'],
        "weightFiveToTen": this.chargesForm.controls['weightFiveToTenPoint'],
        "weightTenToFifteen": this.chargesForm.controls['weightTenToFifteenPoint'],
        "weightUptoFiveKg": this.chargesForm.controls['weightUptoFiveKg']
      },
      "shipperId": this.chargesForm.controls['shipper'],
    }
    this.finalresponse.push(fullFormData);
    this.shipperDetailList.addDeliveryCharges(fullFormData).subscribe(res => {
      console.log(res);
    }, err => {

    })
  }
}
