import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseManagerDashboardComponent } from './warehouse-manager-dashboard/warehouse-manager-dashboard.component';
import { CreateManagerTripComponent } from './create-manager-trip/create-manager-trip.component';
import { AllDriversComponent } from './all-drivers/all-drivers.component';
import { AllDealersComponent } from './all-dealers/all-dealers.component';
import { AllShippersComponent } from './all-shippers/all-shippers.component';
import { AllVehiclesComponent } from './all-vehicles/all-vehicles.component';
import { AllShipmentsComponent } from './all-shipments/all-shipments.component';

const routes: Routes = [
  {
    path: '',
    component: WarehouseManagerDashboardComponent,
  },
  {
    path: 'warehouseManagerDashboard',
    component: WarehouseManagerDashboardComponent,
  },
  {
    path: 'managertrip',
    component: CreateManagerTripComponent,
  },
  {
    path: 'allDrivers',
    component: AllDriversComponent
  },
  {
    path: 'allDealers',
    component: AllDealersComponent
  },
  {
    path: 'allShippers',
    component: AllShippersComponent
  },
  {
    path: 'allVehicles',
    component: AllVehiclesComponent
  },
  {
    path: 'allShipments',
    component: AllShipmentsComponent
  }



]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseManagerRoutingModule { }
