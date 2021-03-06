import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ShipperWearhouseService } from '../../../../services/shipperwearhouse.service';


declare var $;
@Component({
  selector: 'app-shipperwearhouselist',
  templateUrl: './shipperwearhouselist.component.html',
  styleUrls: ['./shipperwearhouselist.component.css']
})
export class ShipperwearhouselistComponent implements OnInit {

  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};
  shipperwearhouselist: any;

  constructor(private router: Router, private shipperwearhouse: ShipperWearhouseService) { }

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
    this.shipperwearhouse.GetShipperWerahouseList().subscribe( res => {
      this.shipperwearhouselist = res.data;
      console.log("res" , res.data)

    })
  }
  DeleteWearhouse(id){
    this.shipperwearhouse.DeleteShipperWearhouse(id).subscribe( res => {
      
      console.log("res" , res)
      

    })
  }
}
