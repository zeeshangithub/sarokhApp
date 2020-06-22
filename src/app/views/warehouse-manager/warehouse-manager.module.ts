import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseManagerComponent } from './warehouse-manager.component';
import { WarehouseManagerDashboardComponent } from './warehouse-manager-dashboard/warehouse-manager-dashboard.component';
import { WarehouseManagerRoutingModule } from './warehouse-manager-routing.module';
import { CreateManagerTripComponent } from './create-manager-trip/create-manager-trip.component';



@NgModule({
  declarations: [WarehouseManagerComponent, WarehouseManagerDashboardComponent, CreateManagerTripComponent ],
  imports: [
    CommonModule,
    WarehouseManagerRoutingModule
  ]
})
export class WarehouseManagerModule { }
