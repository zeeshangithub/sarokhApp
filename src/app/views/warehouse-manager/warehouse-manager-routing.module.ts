import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseManagerDashboardComponent } from './warehouse-manager-dashboard/warehouse-manager-dashboard.component';
import { CreateManagerTripComponent } from './create-manager-trip/create-manager-trip.component';

const routes: Routes = [
  {
    path: '',
    component: WarehouseManagerDashboardComponent,
  },
  {
    path: 'warehouseManagerDashboard',
    component: WarehouseManagerDashboardComponent,
  },{
    path: 'managertrip',
    component: CreateManagerTripComponent
  }



]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseManagerRoutingModule { }
