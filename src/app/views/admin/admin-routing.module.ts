import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AllLedgersComponent } from './finance/all-ledgers/all-ledgers.component';
import { DriverLocationComponent } from './Tracking/driver-location/driver-location.component';
import { OrderLocationComponent } from './Tracking/order-location/order-location.component';
import { AllordersComponent } from '../admin/orders/allorders/allorders.component';
// import { PickupOrdersComponent } from '../admin/shipments/';
// import { DeliveryOrdersComponent } from '../orders/delivery-orders/delivery-orders.component';
import { AllshipmentsComponent } from './shipments/allshipments/allshipments.component';
import { DeliverdshipmentsComponent } from './shipments/deliverdshipments/deliverdshipments.component';
import { PendingshipmentsComponent } from './shipments/pendingshipments/pendingshipments.component';
import { NoresponseshipmentComponent } from './shipments/noresponseshipment/noresponseshipment.component';
import { PrepeaidshipmentsComponent } from './shipments/prepeaidshipments/prepeaidshipments.component';
import { ShipmentissueComponent } from '../shipper/shipmentissue/shipmentissue.component';
import { ReturnshipmentsComponent } from './shipments/returnshipments/returnshipments.component';
import { ShipmentsissueComponent } from './shipments/shipmentsissue/shipmentsissue.component';
import { ShippersComponent } from './shippers/shippers/shippers.component';
import { ShippersissueComponent } from './shippers/shippersissue/shippersissue.component';
import { ShippersbillingComponent } from './shippers/shippersbilling/shippersbilling.component';
import { CodCollectionComponent } from './finance/cod-collection/cod-collection.component';
import { ShipperBillingComponent } from './finance/shipper-billing/shipper-billing.component';
import { DriverPayoutComponent } from './finance/driver-payout/driver-payout.component';
import { AddDealerComponent } from './dealer/add-dealer/add-dealer.component';
import { AlldealersComponent } from './dealer/alldealers/alldealers.component';
import { DealerPayoutComponent } from './finance/dealer-payout/dealer-payout.component';
import { FinanceDashboardComponent } from './finance/finance-dashboard/finance-dashboard.component';
import { AdddriversComponent } from './driver/adddrivers/adddrivers.component';
import { AlldriversComponent } from './driver/alldrivers/alldrivers.component';
import { ReceivecashComponent } from './receivecash/receivecash.component';
import { DispensecashComponent } from './dispensecash/dispensecash.component';
import { PickupShipmentsComponent } from './shipments/pickup-shipments/pickup-shipments.component';
import { DeliveryShipmentsComponent } from './shipments/delivery-shipments/delivery-shipments.component';
import { CodshipmentsComponent } from './shipments/codshipments/codshipments.component';
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
import { AddsarokhwearhouseComponent } from './sarokhWearhouse/addsarokhwearhouse/addsarokhwearhouse.component';
import { SarokhwearhouselistComponent } from './sarokhWearhouse/sarokhwearhouselist/sarokhwearhouselist.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'allLedgers',
    component: AllLedgersComponent,
  },
  {
    path: 'driverlocation',
    component: DriverLocationComponent,
  },
  {
    path: 'orderlocation',
    component: OrderLocationComponent,
  },
  {
    path: 'allorder',
    component: AllordersComponent,
  },
  // {
  //   path: 'pickuporders',
  //   component: PickupOrdersComponent,
  // },
  // {
  //   path: 'deliveryorders',
  //   component: DeliveryOrdersComponent,
  // },
  {
    path: 'allshipments',
    component: AllshipmentsComponent,
  },
  {
    path: 'deliverdshipments',
    component: DeliverdshipmentsComponent,
  },
  {
    path: 'pendingshipments',
    component: PendingshipmentsComponent,
  },
  {
    path: 'noresponseshipments',
    component: NoresponseshipmentComponent,
  },
  {
    path: 'codshipments',
    component: CodshipmentsComponent,
  },
  {
    path: 'prepaidshipments',
    component: PrepeaidshipmentsComponent,
  },
  {
    path: 'returnshipments',
    component: ReturnshipmentsComponent,
  },
  {
    path: 'issushipments',
    component: ShipmentsissueComponent,
  },

  {
    path: 'shippersissues',
    component: ShippersissueComponent,
  },
  {
    path: 'shippersbilling',
    component: ShippersbillingComponent,
  },
  {
    path: 'codCollection',
    component: CodCollectionComponent,
  },
  {
    path: 'shipperBilling',
    component: ShipperBillingComponent,
  },
  {
    path: 'driverPayout',
    component: DriverPayoutComponent,
  },
  {
    path: 'dealerPayout',
    component: DealerPayoutComponent,
  },
  {
    path: 'adddealer',
    component: AddDealerComponent,
  },

  {
    path: 'adddealer/:id',
    component: AddDealerComponent,
  },

  {
    path: 'alldealers',
    component: AlldealersComponent,
  },

  {
    path: 'financeDashboard',
    component: FinanceDashboardComponent,
  },
  {
    path: 'adddriver',
    component: AdddriversComponent,
  },

  {
    path: 'receivecash',
    component: ReceivecashComponent,
  },
  {
    path: 'dispensecash',
    component: DispensecashComponent
  },

  {
    path: 'alldrivers',
    component: AlldriversComponent,
  },
  {
    path: 'allorders',
    component: AllordersComponent,
  },
  {
    path: 'pickupshipments',
    component: PickupShipmentsComponent,
  },
  {
    path: 'deliveryshipments',
    component: DeliveryShipmentsComponent,
  },
  {
    path: 'addVehical',
    component: AddVehicalComponent,
  },
  {
    path: 'allTrips',
    component: AllTripsComponent,
  },
  {
    path: 'activeTrips',
    component: ActiveTripsComponent,
  },
  {
    path: 'createTrip',
    component: CreateTripComponent,
  },
  {
    path: 'pendingTrips',
    component: PendingTripsComponent,
  },
  {
    path: 'completedTrips',
    component: CompletedTripsComponent,
  },
  {
    path: 'allVehicles',
    component: AllVehiclesComponent,
  },
  {
    path: 'maintenanceRecords',
    component: MaintenanceRecordsComponent,
  },
  {
    path: 'inventoryManagement',
    component: InventoryManagementComponent,
  },
  {
    path: 'shippers',
    component: ShippersComponent,
  },
  {
    path: 'codLedgers',
    component: CodLedgersComponent,
  },
  {
    path: 'dealersInventory',
    component: DealersInventoryComponent,
  },
  {
    path: 'addsarokhwearhouse',
    component: AddsarokhwearhouseComponent,
  },
  {
    path: 'sarokhwearhouselist',
    component: SarokhwearhouselistComponent,
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
