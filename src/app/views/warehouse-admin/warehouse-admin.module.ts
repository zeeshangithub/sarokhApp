import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseAdminRoutingModule } from './admin-warehouse-routing.module';
import { WarehouseAdminComponent } from './warehouse-admin.component';
import { WarehouseDashboardComponent } from './warehouse-dashboard/warehouse-dashboard.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ReciveOrdersComponent } from './recive-orders/recive-orders.component';
import { FormsModule } from '@angular/forms';
import { DispatchOrdersComponent } from './dispatch-orders/dispatch-orders.component';
import { ReceiverDropOffComponent } from './receiver-drop-off/receiver-drop-off.component';
import { AgmCoreModule } from '@agm/core';



@NgModule({
  declarations: [WarehouseAdminComponent, WarehouseDashboardComponent, WarehouseComponent, ReciveOrdersComponent, DispatchOrdersComponent, ReceiverDropOffComponent],
  imports: [
    CommonModule,
    WarehouseAdminRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjt_DROGYyzEY0BTDt0vrPcZIMLuBUGiw',
    })
  ]
})
export class WarehouseAdminModule { }
