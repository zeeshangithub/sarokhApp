import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminMisService } from '../../../services/adminMis.service';

@Component({
  selector: 'app-receivecash',
  templateUrl: './receivecash.component.html',
  styleUrls: ['./receivecash.component.css']
})
export class ReceivecashComponent implements OnInit {
  allLedgers;


  reciveCashForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private receiveCash: AdminMisService) { }

  ngOnInit(): void {
    this.initializeReciveCashForm();
    this.getLedgerList();
  }


  initializeReciveCashForm() {
    this.reciveCashForm = this.formbuilder.group({
      amount: ['', [Validators.required]],
      bill: ['', [Validators.required]],
      datetime: ['', [Validators.required]],
      details: ['', [Validators.required]],
      ledgerName: ['', [Validators.required]],
      ledgerNo: ['', [Validators.required]],
      paymentDescription: ['', [Validators.required]],
      paymentMethod: ['', [Validators.required]],
      transactionFrom: ['', [Validators.required]],
      transactionId: ['', [Validators.required]],
      transactionTo: [],
      transactionType: ['Credit', [Validators.required]],
      userId: []
    })
  }
  getLedgerList() {

    this.receiveCash.getLedgerList().subscribe(res => {
      console.log("res", res)
      this.allLedgers = res.data

    })
  }
  addReceiveCash() {

    console.log("this.reciveCashForm.value", this.reciveCashForm.value)
    this.reciveCashForm.get('transactionTo').setValue("Sarokh")
    this.receiveCash.receiveCashService(this.reciveCashForm.value).subscribe(res => {
      console.log("res", res)
      if (res.status === 200) {
        this.reciveCashForm.reset();
      }
    })
  }
}
