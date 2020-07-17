import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminService } from '../../../../services/admin.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-deliverycharges',
  templateUrl: './deliverycharges.component.html',
  styleUrls: ['./deliverycharges.component.css']
})
export class DeliverychargesComponent implements OnInit {
  finalresponse: any = [];
  public shipperList;
  chargesForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private shipperDetailList: AdminService, private toaster: ToastrService) { }
  ngOnInit(): void {
    this.getShipperList();
    this.initializeDeliveryChargesForm();
  }
  initializeDeliveryChargesForm() {
    this.chargesForm = this.formbuilder.group({
      shipperId: [''],
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
    let fullFormData = {
      "lastMileDelivery": {
        "chargesType": this.chargesForm.controls['chargesType'].value,
        "codcharges": this.chargesForm.controls['codcharges'].value,
        "id": this.chargesForm.controls['id'].value,
        "returnCharges": this.chargesForm.controls['returnCharges'].value,
        "shipperId": this.chargesForm.controls['shipperId'].value,
        "weightFiveToTen": this.chargesForm.controls['weightFiveToTen'].value,
        "weightTenToFifteen": this.chargesForm.controls['weightTenToFifteen'].value,
        "weightUptoFiveKg": this.chargesForm.controls['weightUptoFiveKg'].value
      },
      "pointDelivery": {
        "chargesType": this.chargesForm.controls['chargesTypePoint'].value,
        "codcharges": this.chargesForm.controls['codchargesPoint'].value,
        "id": this.chargesForm.controls['idPoint'].value,
        "returnCharges": this.chargesForm.controls['returnChargesPoint'].value,
        "shipperId": this.chargesForm.controls['shipperId'].value,
        "weightFiveToTen": this.chargesForm.controls['weightFiveToTenPoint'].value,
        "weightTenToFifteen": this.chargesForm.controls['weightTenToFifteenPoint'].value,
        "weightUptoFiveKg": this.chargesForm.controls['weightUptoFiveKg'].value
      },
      "shipperId": this.chargesForm.controls['shipperId'].value
    }
    this.shipperDetailList.addDeliveryCharges(fullFormData).subscribe(res => {
      if (res.status == 200) {
        this.toaster.success(res.message);
      } else {
        this.toaster.error(res.message);
      }
    }, err => {

    })
  }
}
