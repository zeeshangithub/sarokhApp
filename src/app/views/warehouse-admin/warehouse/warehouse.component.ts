import { Component, OnInit } from '@angular/core';
import { WarehouseService } from '../../../services/warehouse.service';
import { SarokhwearhouseService } from '../../../services/sarokhwearhouse.service';

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {
  warehouses;
  shipmentList;
  warehouseData: any;
  constructor(private getWarehouseService : WarehouseService ,private getwarehouseDashoboardData : SarokhwearhouseService) { }

  ngOnInit(): void {
    this.getWarehouseService.fetchSarokhWarehouses().subscribe(res =>{
      this.warehouses = res.data
    })
  }

  getWarehouseData(id){
    
     this.getwarehouseDashoboardData.dashboardSarokhWearhouse(id).subscribe(res =>{
       console.log("res" , res)
       this.warehouseData = res.data;
       this.shipmentList = res.data.shipments
       console.log()
     })
  }


}
