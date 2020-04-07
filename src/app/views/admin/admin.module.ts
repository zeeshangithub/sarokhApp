import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
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
import { CodCollectionComponent } from './finance/cod-collection/cod-collection.component';
import { ShipperBillingComponent } from './finance/shipper-billing/shipper-billing.component';
import { DriverPayoutComponent } from './finance/driver-payout/driver-payout.component';
import { LedgerDetailComponent } from './finance/ledger-detail/ledger-detail.component';
import { AddDealerComponent } from './dealer/add-dealer/add-dealer.component';
import { AlldealersComponent } from './dealer/alldealers/alldealers.component';
import { DataService } from '../../services/data.service';
import { FileUploadModule } from 'ng2-file-upload';
import { DealerPayoutComponent } from './finance/dealer-payout/dealer-payout.component';
import { FinanceDashboardComponent } from './finance/finance-dashboard/finance-dashboard.component';
import { AlldriversComponent } from './driver/alldrivers/alldrivers.component';
import { AdddriversComponent } from './driver/adddrivers/adddrivers.component';
import { PickupShipmentsComponent } from './shipments/pickup-shipments/pickup-shipments.component';
import { DeliveryShipmentsComponent } from './shipments/delivery-shipments/delivery-shipments.component';



@NgModule({
  declarations: [DashboardComponent, AdminComponent,
    AllLedgersComponent, DriverLocationComponent,
    OrderLocationComponent, AllordersComponent,
    PickupordersComponent, DeliveryordersComponent,
    AllshipmentsComponent, DeliverdshipmentsComponent,
    PendingshipmentsComponent, NoresponseshipmentComponent,
    CodshipmentsComponent, PrepeaidshipmentsComponent,
    ReturnshipmentsComponent, ShipmentsissueComponent,
    ShippersComponent, ShippersissueComponent,
    ShippersbillingComponent, CodCollectionComponent,
    ShipperBillingComponent, DriverPayoutComponent,
    LedgerDetailComponent, AddDealerComponent, AlldealersComponent, DealerPayoutComponent, FinanceDashboardComponent,
    AlldriversComponent, AdddriversComponent, PickupShipmentsComponent, DeliveryShipmentsComponent,],
  imports: [
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    ArchwizardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    AdminRoutingModule,
    FileUploadModule
  ],
  providers: [DataService]
})
export class AdminModule { }
