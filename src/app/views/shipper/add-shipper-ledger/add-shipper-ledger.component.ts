import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { ShipperService } from '../../../services/shipper.service';
import { IfStmt } from '@angular/compiler';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-add-shipper-ledger',
  templateUrl: './add-shipper-ledger.component.html',
  styleUrls: ['./add-shipper-ledger.component.css']
})
export class AddShipperLedgerComponent implements OnInit {
  // myGroup
  ledgerForm: FormGroup;
  shipperId;
  shipperShipments;
  sum = 0;
  newobj;
  date: string;
  selectedShippment;
  selectedShipmentsIds = [];
  sub;
  legderid: any;

  constructor(private formbuilder: FormBuilder, private shipperservice: ShipperService,
    private router: Router, private _Activatedroute: ActivatedRoute, ) { }
  ngOnInit(): void {
    this.initializeLedgerForm();

    this._Activatedroute.paramMap.subscribe(params => {
      this.legderid = params.get('id');
      console.log("this.id", this.legderid)
    });
    if (this.legderid) {
      this.shipperservice.getLedgerDetails(this.legderid).subscribe(res => {
        const selectedLedger = res.data;
        console.log("selectedLedger", selectedLedger)
        // this.ledgerForm.patchValue({ 'startDate': selectedLedger.startDate })
        // this.ledgerForm.patchValue({ 'endDate': selectedLedger.endDate })
        // this.ledgerForm.patchValue({ 'dueDate': selectedLedger.dueDate })
        this.ledgerForm = this.formbuilder.group({
          startDate: [selectedLedger.startDate],
          endDate: [selectedLedger.endDate],
          shipperId: [selectedLedger.shipperId],
          dueDate: [selectedLedger.dueDate],
          ledgerName: [selectedLedger.ledgerName],
          paymentStatus: [''],
          shipmentsIdList: [''],
          totalAmount: [''],
          id: ['']
        })
      })
    }
  }
  initializeLedgerForm() {
    this.ledgerForm = this.formbuilder.group({
      startDate: [''],
      endDate: [''],
      shipperId: [''],
      dueDate: [''],
      ledgerName: [''],
      paymentStatus: [''],
      shipmentsIdList: [''],
      totalAmount: [''],
      id: ['']
    })
  }
  fetchDetails() {
    this.date = this.ledgerForm.get('endDate').value.setDate(this.ledgerForm.get('endDate').value.getDate() + 7);
    const calculatedDate = new Date(this.date); // The 0 there is the key, which sets the date to the epoch
    this.ledgerForm.get('dueDate').setValue(calculatedDate)
    console.log("date", this.date)
    this.ledgerForm.get('shipperId').setValue(this.shipperId);
    console.log("shan", this.ledgerForm.value)
    this.shipperservice.searchShipperShipment(this.ledgerForm.value).subscribe(res => {
      this.shipperShipments = res.data;
      console.log("this.shipperShipments", this.shipperShipments)
    })
  }
  addValue(selected, event) {
    this.selectedShippment = selected;
    console.log("id", this.selectedShippment, event);
    if (event === true) {
      this.newobj = this.shipperShipments.filter(
        book => book.id === this.selectedShippment.id);
      console.log(this.newobj[0].shipmentBilledAmount)
      this.sum = this.sum + this.newobj[0].shipmentBilledAmount;
      this.selectedShipmentsIds.push(this.newobj[0].id);
      console.log("this.selectedShipmentsIds", this.selectedShipmentsIds)
      console.log(this.sum)
    } else if (event === false) {
      const index = this.selectedShipmentsIds.indexOf(this.selectedShippment.id)
      this.sum = this.sum - this.newobj[0].shipmentBilledAmount;
      this.selectedShipmentsIds.splice(index, 1)
    }
    console.log("this.selectedShipmentsIds", this.selectedShipmentsIds)
  }
  createBill() {
    var str = this.selectedShipmentsIds.toString();
    console.log("str", str);
    this.ledgerForm.get('id').setValue(this.selectedShippment.id);
    this.ledgerForm.get('totalAmount').setValue(this.sum);
    this.ledgerForm.get('paymentStatus').setValue(this.selectedShippment.deliveryStatus);
    this.ledgerForm.get('shipmentsIdList').setValue(str);
    this.ledgerForm.get('dueDate').setValue(new Date('August 19, 1975 23:15:30'));
    this.ledgerForm.get('ledgerName').setValue(this.selectedShippment.paymentType);
    console.log("this.ledgerForm", this.ledgerForm.value)
    this.shipperservice.createShipperLedgerShipment(this.ledgerForm.value).subscribe(res => {
      console.log(res);
      if (res.status === 200) {
        this.router.navigate(['/shipper/ledgers']);
      }
    })
  }
}
