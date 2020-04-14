import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseAdminRoutingModule } from './admin-warehouse-routing.module';
import { WarehouseAdminComponent } from './warehouse-admin.component';
import { WarehouseDashboardComponent } from './warehouse-dashboard/warehouse-dashboard.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ReciveOrdersComponent } from './recive-orders/recive-orders.component';
import { FormsModule } from '@angular/forms';
import { DispatchOrdersComponent } from './dispatch-orders/dispatch-orders.component';



@NgModule({
  declarations: [WarehouseAdminComponent, WarehouseDashboardComponent, WarehouseComponent, ReciveOrdersComponent, DispatchOrdersComponent],
  imports: [
    CommonModule,
    WarehouseAdminRoutingModule,
    FormsModule
  ]
})
export class WarehouseAdminModule { }
