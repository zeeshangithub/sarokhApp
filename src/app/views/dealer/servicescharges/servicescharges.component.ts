import { Component, OnInit } from '@angular/core';
import { DealerService } from '../../../services/dealer.service';

@Component({
  selector: 'app-servicescharges',
  templateUrl: './servicescharges.component.html',
  styleUrls: ['./servicescharges.component.css']
})
export class ServiceschargesComponent implements OnInit {

  public serviceCharges;

  constructor(private charges: DealerService) { }

  ngOnInit(): void {
    this.getServiceCharges();
  }

  getServiceCharges() {
    this.charges.fetchDealersCharges().subscribe(res => {
      this.serviceCharges = res.data
    })
  }

}
