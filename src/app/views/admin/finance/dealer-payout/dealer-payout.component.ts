import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-dealer-payout',
  templateUrl: './dealer-payout.component.html',
  styleUrls: ['./dealer-payout.component.css']
})
export class DealerPayoutComponent implements OnInit {

  private dealerPayout;

  constructor(private DealerPayout: AdminService) { }

  ngOnInit(): void {
    this.getDealerPayout();
  }

  getDealerPayout() {
    this.DealerPayout.fetchDealerPayout().subscribe(res => {
      this.dealerPayout = res.data
    })
  }

}
