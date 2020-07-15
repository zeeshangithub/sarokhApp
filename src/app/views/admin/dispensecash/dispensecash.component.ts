import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AdminMisService } from '../../../services/adminMis.service';

@Component({
  selector: 'app-dispensecash',
  templateUrl: './dispensecash.component.html',
  styleUrls: ['./dispensecash.component.css']
})
export class DispensecashComponent implements OnInit {
  allLedgers;

  dispenseCashForm: FormGroup;
  constructor(private formbuilder: FormBuilder, private dispenseCashService: AdminMisService) { }

  ngOnInit(): void {
    this.initializeReciveCashForm();
    this.getLedgerList();
  }


  initializeReciveCashForm() {
    this.dispenseCashForm = this.formbuilder.group({
      amount: ['', [Validators.required]],
      bill: ['', [Validators.required]],
      datetime: ['', [Validators.required]],
      details: ['', [Validators.required]],
      ledgerName: ['', [Validators.required]],
      ledgerNo: ['', [Validators.required]],
      paymentDescription: ['', [Validators.required]],
      paymentMethod: ['', [Validators.required]],
      transactionFrom: [],
      transactionId: ['', [Validators.required]],
      transactionTo: ['', [Validators.required]],
      transactionType: ['Debit', [Validators.required]],
      userId: []
    })
  }
  getLedgerList() {

    this.dispenseCashService.getLedgerList().subscribe(res => {
      console.log("res", res)
      this.allLedgers = res.data

    })
  }
  adddispenseCash() {

    console.log("this.reciveCashForm.value", this.dispenseCashForm.value)
    this.dispenseCashForm.get('transactionFrom').setValue("Sarokh")
    const parentRole = localStorage.getItem('role')
    this.dispenseCashService.dispenseCashService(this.dispenseCashForm.value, parentRole).subscribe(res => {
      console.log("res", res)
      if (res.status === 200) {
        this.dispenseCashForm.reset();
      }
    })
  }
}
