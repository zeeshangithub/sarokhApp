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
import { PickupShipmentsComponent } from './shipments/pickup-shipments/pickup-shipments.component';


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
    component: PendingshipmentsComponent,
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

  // {
  //   path: 'adddealer/:id',
  //   component: AddDealerComponent,
  // },

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
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
