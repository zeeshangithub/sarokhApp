import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { DealerService } from '../../../../services/dealer.service';
import { DataService } from '../../../../services/data.service';
declare var $;
@Component({
  selector: 'app-alldealers',
  templateUrl: './alldealers.component.html',
  styleUrls: ['./alldealers.component.css']
})
export class AlldealersComponent implements OnInit {

  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};
  dealerlist: any;
  constructor(private router: Router,
    private dealerservice: DealerService,private shareData : DataService
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
      this.dealerlist = res.data;
      console.log("this.dealerList", this.dealerlist)
    })
  }

  redirectTo(path: string): void {
    this.router.navigate([path]);
  }
  deletedealer(id){
    this.dealerservice.deleteDealer(id).subscribe(res => {
      console.log(res);
      this.getDealerList();
    })
  }

  editDealer(id){
    console.log("id" , id)
    this.shareData.setID(id);
    this.router.navigate(['/admin/adddealer/',{id:id}]);
  }

}
