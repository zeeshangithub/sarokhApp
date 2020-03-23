import { Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { ShipperWearhouseService } from '../../../../services/shipperwearhouse.service';
import { DataService } from '../../../../services/data.service';


declare var $;
@Component({
  selector: 'app-shipperwearhouselist',
  templateUrl: './shipperwearhouselist.component.html',
  styleUrls: ['./shipperwearhouselist.component.css'],
  
})
export class ShipperwearhouselistComponent implements OnInit {

  @ViewChild('dataTable') table;
  dataTable: any;
  dtOption: any = {};
  shipperwearhouselist: any;
  showlisting  : boolean = true;
  constructor(private router: Router, private shipperwearhouse: ShipperWearhouseService,
    private shareData : DataService,
    private cdr: ChangeDetectorRef
    ) { }
  ngOnInit(): void {
    this.dtOption = {
      "paging": true,
      "ordering": true,
      "info": true
    };
    // debugger;

    this.fetchWearhouse();
    
  }
  ngAfterViewInit() {
    this.dataTable = $(this.table.nativeElement);
    this.dataTable.DataTable(this.dtOption);
    this.fetchWearhouse();

  }
  onLoadNext(){
    
    this.fetchWearhouse();
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
      if(res.status === 200){
        this.fetchWearhouse();
      }
    })
  }
  addNew(e){
    this.showlisting = e
  }
  editShipper(id , e : boolean){
    this.showlisting = e;
    this.shareData.setID(id);
  }
}
