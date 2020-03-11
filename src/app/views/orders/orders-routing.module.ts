import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllOrdersComponent } from './all-orders/all-orders.component';
import { PickupOrdersComponent } from './pickup-orders/pickup-orders.component';
import { DeliveryOrdersComponent } from './delivery-orders/delivery-orders.component';
import { NoResponseOrdersComponent } from './no-response-orders/no-response-orders.component';
import { BulkOrderUpdateComponent } from './bulk-order-update/bulk-order-update.component';
import { CodReportsComponent } from './cod-reports/cod-reports.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AddOrderComponent } from './add-order/add-order.component';
import { ShipperOnlyGuard } from '../../guards/shipper-only.guard';

const routes: Routes = [
  {
		path: '',
		component: AllOrdersComponent,
  },
  {
		path: 'add',
    component: AddOrderComponent,
    canActivate: [ShipperOnlyGuard]
  },
  {
    path: 'allorders',
    component: AllOrdersComponent
  },
  {
    path: 'pickuporders',
    component: PickupOrdersComponent
  },
  {
    path: 'deliveryorders',
    component: DeliveryOrdersComponent
  },
  {
    path: 'noresponseorders',
    component: NoResponseOrdersComponent
  },
  {
    path: 'bulkordersupdate',
    component: BulkOrderUpdateComponent
  },
  {
    path: 'codreports',
    component: CodReportsComponent
  },
  {
    path: 'vieworder/:orderId',
    component: ViewOrderComponent
  },
  {
    path: 'editorder/:orderId',
    component: EditOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
