import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ArchwizardModule } from 'angular-archwizard';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { ShipperRoutingModule } from './shipper-routing.module';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { ShippersComponent } from './shippers/shippers.component';
import { AddshipperwearhouseComponent } from './shipperWearhouse/addshipperwearhouse/addshipperwearhouse.component';
import { ShipperwearhouselistComponent } from './shipperWearhouse/shipperwearhouselist/shipperwearhouselist.component';

import { ShipperDashboardComponent } from './shipper-dashboard/shipper-dashboard.component';
import { DataService } from '../../services/data.service';

import { HighchartsChartComponent } from 'highcharts-angular';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ReturnshipmentsComponent } from './returnshipments/returnshipments.component';
import { ShipperLedgerComponent } from './shipper-ledger/shipper-ledger.component';
import { AddShipperLedgerComponent } from './add-shipper-ledger/add-shipper-ledger.component';
import { CodshipmentsComponent } from './codshipments/codshipments.component';
import { ShipmentissueComponent } from './shipmentissue/shipmentissue.component';
import { NgxPrintModule } from 'ngx-print';
import { PrintlablesComponent } from './printlables/printlables.component';
@NgModule({
  declarations: [AddShipperComponent, ShippersComponent, AddshipperwearhouseComponent, ShipperwearhouselistComponent, ShipperDashboardComponent, ShipmentsComponent, ReturnshipmentsComponent, ShipperLedgerComponent, AddShipperLedgerComponent , CodshipmentsComponent, ShipmentissueComponent, PrintlablesComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ShipperRoutingModule,
    ArchwizardModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    ReactiveFormsModule,
    NgxPrintModule
    // HighchartsChartComponent
  ],
  providers: [DataService]
})
export class ShipperModule { }
