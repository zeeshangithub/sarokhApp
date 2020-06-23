import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DealerService } from '../../../services/dealer.service';

@Component({
  selector: 'app-all-dealers',
  templateUrl: './all-dealers.component.html',
  styleUrls: ['./all-dealers.component.css']
})
export class AllDealersComponent implements OnInit {

  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};
  dealerlist: any;
  constructor(private router: Router,
    private dealerservice: DealerService
  ) { }

  ngOnInit(): void {
    this.dtOption = {
      "paging": true,
      "ordering": true,
      "info": true
    };
    this.getDealerList();
  }

  getDealerList() {
    this.dealerservice.fetchDealers().subscribe(res => {
      console.log(res.data)

      this.dealerlist = res.data;

      console.log("this.dealerList", this.dealerlist)
    })
  }

  redirectTo(path: string): void {
    this.router.navigate([path]);
  }

}

