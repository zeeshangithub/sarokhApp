import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DealerService } from '../../../services/dealer.service';
declare var $;
@Component({
  selector: 'app-dealers',
  templateUrl: './dealers.component.html',
  styleUrls: ['./dealers.component.css']
})
export class DealersComponent implements OnInit {
  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};
  dealerList: any;
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

  ngAfterViewInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOption);
  }

  getDealerList() {
    this.dealerservice.fetchDealers().subscribe(res => {
      this.dealerList = res;
      console.log("this.driverList", this.dealerList)
    })
  }

  redirectTo(path: string): void {
    this.router.navigate([path]);
  }

}
