import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { OrdersRoutingModule } from './orders-routing.module';
import { ArchwizardModule } from 'angular-archwizard';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { AllOrdersComponent } from './all-orders/all-orders.component';
import { PickupOrdersComponent } from './pickup-orders/pickup-orders.component';
import { DeliveryOrdersComponent } from './delivery-orders/delivery-orders.component';
import { NoResponseOrdersComponent } from './no-response-orders/no-response-orders.component';
import { BulkOrderUpdateComponent } from './bulk-order-update/bulk-order-update.component';
import { CodReportsComponent } from './cod-reports/cod-reports.component';
import { ViewOrderComponent } from './view-order/view-order.component';
import { EditOrderComponent } from './edit-order/edit-order.component';
import { AddOrderComponent } from './add-order/add-order.component';


@NgModule({
  declarations: [
    AllOrdersComponent,
    PickupOrdersComponent,
    DeliveryOrdersComponent,
    NoResponseOrdersComponent,
    BulkOrderUpdateComponent,
    CodReportsComponent,
    ViewOrderComponent,
    EditOrderComponent,
    AddOrderComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    OrdersRoutingModule,
    NgxDatatableModule,
    ArchwizardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ]
})
export class OrdersModule { }
