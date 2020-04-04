import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChartsModule } from 'ng2-charts';
import { AdminComponent } from '../admin/admin.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { AllLedgersComponent } from './finance/all-ledgers/all-ledgers.component';
import { DriverLocationComponent } from './Tracking/driver-location/driver-location.component';
import { OrderLocationComponent } from './Tracking/order-location/order-location.component';
import { AllordersComponent } from './orders/allorders/allorders.component';
import { PickupordersComponent } from './orders/pickuporders/pickuporders.component';
import { DeliveryordersComponent } from './orders/deliveryorders/deliveryorders.component';
import { AllshipmentsComponent } from './shipments/allshipments/allshipments.component';
import { DeliverdshipmentsComponent } from './shipments/deliverdshipments/deliverdshipments.component';
import { PendingshipmentsComponent } from './shipments/pendingshipments/pendingshipments.component';
import { NoresponseshipmentComponent } from './shipments/noresponseshipment/noresponseshipment.component';
import { CodshipmentsComponent } from './shipments/codshipments/codshipments.component';
import { PrepeaidshipmentsComponent } from './shipments/prepeaidshipments/prepeaidshipments.component';
import { ReturnshipmentsComponent } from './shipments/returnshipments/returnshipments.component';
import { ShipmentsissueComponent } from './shipments/shipmentsissue/shipmentsissue.component';
import { ShipmentissueComponent } from '../shipper/shipmentissue/shipmentissue.component';
import { ShippersComponent } from './shippers/shippers/shippers.component';
import { ShippersissueComponent } from './shippers/shippersissue/shippersissue.component';
import { ShippersbillingComponent } from './shippers/shippersbilling/shippersbilling.component';



@NgModule({
  declarations: [DashboardComponent, AdminComponent , AllLedgersComponent, DriverLocationComponent, OrderLocationComponent, AllordersComponent, PickupordersComponent, DeliveryordersComponent, AllshipmentsComponent, DeliverdshipmentsComponent, PendingshipmentsComponent, NoresponseshipmentComponent, CodshipmentsComponent, PrepeaidshipmentsComponent, ReturnshipmentsComponent, ShipmentsissueComponent, ShippersComponent, ShippersissueComponent, ShippersbillingComponent],
  imports: [
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot(),
    AdminRoutingModule
  ]
})
export class AdminModule { }
