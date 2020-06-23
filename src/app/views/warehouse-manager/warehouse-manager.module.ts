import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseManagerComponent } from './warehouse-manager.component';
import { WarehouseManagerDashboardComponent } from './warehouse-manager-dashboard/warehouse-manager-dashboard.component';
import { WarehouseManagerRoutingModule } from './warehouse-manager-routing.module';
import { CreateManagerTripComponent } from './create-manager-trip/create-manager-trip.component';
import { AllDriversComponent } from './all-drivers/all-drivers.component';
import { AllDealersComponent } from './all-dealers/all-dealers.component';
import { AllShippersComponent } from './all-shippers/all-shippers.component';
import { AllVehiclesComponent } from './all-vehicles/all-vehicles.component';
import { AllShipmentsComponent } from './all-shipments/all-shipments.component';



@NgModule({
  declarations: [WarehouseManagerComponent, WarehouseManagerDashboardComponent, CreateManagerTripComponent, AllDriversComponent, AllDealersComponent, AllShippersComponent, AllVehiclesComponent, AllShipmentsComponent ],
  imports: [
    CommonModule,
    WarehouseManagerRoutingModule
  ]
})
export class WarehouseManagerModule { }
