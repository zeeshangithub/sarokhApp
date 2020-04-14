import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseAdminComponent } from './warehouse-admin.component';
import { WarehouseDashboardComponent } from './warehouse-dashboard/warehouse-dashboard.component';
import { WarehouseComponent } from './warehouse/warehouse.component';
import { ReciveOrdersComponent } from './recive-orders/recive-orders.component';
import { DispatchOrdersComponent } from './dispatch-orders/dispatch-orders.component';
import { ReceiverDropOffComponent } from './receiver-drop-off/receiver-drop-off.component';


const routes: Routes = [
  {
    path: '',
    component: WarehouseDashboardComponent,
  },
  {
    path: 'warehousedashboard',
    component: WarehouseDashboardComponent,
  },
  {
    path: 'warehouse',
    component: WarehouseComponent,
  },
  {
    path: 'reciveOrder',
    component: ReciveOrdersComponent,
  },
  {
    path: 'dispatchOrder',
    component: DispatchOrdersComponent,
  },
  {
    path: 'receiverDropOff',
    component: ReceiverDropOffComponent,
  },



]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseAdminRoutingModule { }
