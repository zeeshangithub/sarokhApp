import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { SarokhwearhouseService } from '../../../../services/sarokhwearhouse.service';


declare var $;
@Component({
  selector: 'app-sarokhwearhouselist',
  templateUrl: './sarokhwearhouselist.component.html',
  styleUrls: ['./sarokhwearhouselist.component.css']
})
export class SarokhwearhouselistComponent implements OnInit {

  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};
  sarokhwearhouselist: any;

  constructor(private router: Router, private sarokhwearhouse: SarokhwearhouseService) { }
  ngOnInit(): void {
    this.dtOption = {
      "paging": true,
      "ordering": true,
      "info": true
    };

    this.fetchWearhouse();
  }
  ngAfterViewInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOption);
  }

  viewOrder() {
    this.router.navigate(['orders/vieworder', '216513']);
  }

  addOrder(){
    this.router.navigate(['orders/add']);
  }

  fetchWearhouse () {
    this.sarokhwearhouse.GetSarokhWerahouseList().subscribe( res => {
      this.sarokhwearhouselist = res.data;
      console.log("res" , res.data)

    })
  }
  DeleteWearhouse(id){
    this.sarokhwearhouse.DeleteSarokhWearhouse(id).subscribe( res => {
      
      console.log("res" , res)
      if(res.status === 200){
        this.fetchWearhouse();
      }
      

    })
  }
}
