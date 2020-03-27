import { Component, OnInit } from '@angular/core';
import { ShipperService } from '../../../services/shipper.service';

@Component({
  selector: 'app-shipper-ledger',
  templateUrl: './shipper-ledger.component.html',
  styleUrls: ['./shipper-ledger.component.css']
})
export class ShipperLedgerComponent implements OnInit {

  public ledgerList;
  constructor(private getallLedger : ShipperService ) {}

  ngOnInit(): void {
  this.getLedgers();
  }
getLedgers(){
  this.getallLedger.getLedgerList().subscribe(res =>{
    this.ledgerList = res.data;
    console.log("this.ledgerList" , this.ledgerList)
  })
}
  deleteLedger(id){

this.getallLedger.deleteLedger(id).subscribe(res=> {

  console.log("res" , res)
  this.getLedgers();
})
  
}



}
