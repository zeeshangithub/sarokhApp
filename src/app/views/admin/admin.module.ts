import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { ReceivecashComponent } from './receivecash/receivecash.component';
import { DispensecashComponent } from './dispensecash/dispensecash.component';
import { PickupShipmentsComponent } from './shipments/pickup-shipments/pickup-shipments.component';
import { DeliveryShipmentsComponent } from './shipments/delivery-shipments/delivery-shipments.component';
import { AddVehicalComponent } from './add-vehical/add-vehical.component';
import { AllTripsComponent } from './scheduling/all-trips/all-trips.component';
import { ActiveTripsComponent } from './scheduling/active-trips/active-trips.component';
import { CreateTripComponent } from './scheduling/create-trip/create-trip.component';
import { PendingTripsComponent } from './scheduling/pending-trips/pending-trips.component';
import { CompletedTripsComponent } from './scheduling/completed-trips/completed-trips.component';
import { AllVehiclesComponent } from './vehicles/all-vehicles/all-vehicles.component';
import { MaintenanceRecordsComponent } from './vehicles/maintenance-records/maintenance-records.component';
import { InventoryManagementComponent } from './warehouse/inventory-management/inventory-management.component';
import { CodLedgersComponent } from './dealer/cod-ledgers/cod-ledgers.component';
import { DealersInventoryComponent } from './dealer/dealers-inventory/dealers-inventory.component';
import { SarokhwearhouselistComponent } from './sarokhWearhouse/sarokhwearhouselist/sarokhwearhouselist.component';
import { AddsarokhwearhouseComponent } from './sarokhWearhouse/addsarokhwearhouse/addsarokhwearhouse.component';
import { AgmCoreModule } from '@agm/core';
import { PrintLabelsComponent } from './warehouse/print-labels/print-labels.component';
// import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [DashboardComponent, AdminComponent,
    SarokhwearhouselistComponent, AddsarokhwearhouseComponent,
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
    LedgerDetailComponent, AddDealerComponent, AlldealersComponent,
    AlldriversComponent, AdddriversComponent, ReceivecashComponent, DispensecashComponent,
    AllshipmentsComponent, DeliverdshipmentsComponent,
    PendingshipmentsComponent, NoresponseshipmentComponent,
    CodshipmentsComponent, PrepeaidshipmentsComponent,
    ReturnshipmentsComponent, ShipmentsissueComponent,
    ShippersComponent, ShippersissueComponent,
    ShippersbillingComponent, CodCollectionComponent,
    ShipperBillingComponent, DriverPayoutComponent,
    LedgerDetailComponent, AddDealerComponent, AlldealersComponent, DealerPayoutComponent, FinanceDashboardComponent,
    AlldriversComponent, AdddriversComponent, PickupShipmentsComponent, DeliveryShipmentsComponent, AddVehicalComponent, AllTripsComponent, ActiveTripsComponent, CreateTripComponent, PendingTripsComponent, CompletedTripsComponent, AllVehiclesComponent, MaintenanceRecordsComponent, InventoryManagementComponent, CodLedgersComponent, DealersInventoryComponent, PrintLabelsComponent,],
  imports: [
    // AgGridModule.withComponents([]),
    CommonModule,
    ChartsModule,
    BsDropdownModule,
    ArchwizardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonsModule.forRoot(),
    AdminRoutingModule,
    FileUploadModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCjt_DROGYyzEY0BTDt0vrPcZIMLuBUGiw',
    })
  ],
  providers: [DataService]
})
export class AdminModule { }
