import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { ShippersComponent } from './shippers/shippers.component';
import { AddshipperwearhouseComponent } from './shipperWearhouse/addshipperwearhouse/addshipperwearhouse.component';
import { ShipperwearhouselistComponent } from './shipperWearhouse/shipperwearhouselist/shipperwearhouselist.component';
import { DashboardComponent } from '../admin/dashboard/dashboard.component';
import { ShipperDashboardComponent } from './shipper-dashboard/shipper-dashboard.component';
import { ReturnshipmentsComponent } from './returnshipments/returnshipments.component';
import { ShipmentsComponent } from './shipments/shipments.component';
import { ShipperLedgerComponent } from './shipper-ledger/shipper-ledger.component';
import { AddShipperLedgerComponent } from './add-shipper-ledger/add-shipper-ledger.component';
import { CodshipmentsComponent } from './codshipments/codshipments.component';
import { ShipmentissueComponent } from './shipmentissue/shipmentissue.component';
import { PrintlablesComponent } from './printlables/printlables.component';

const routes: Routes = [
  {
    path: '',
    component: ShippersComponent,
  },
  {
    path: 'Dashboard',
    component: ShipperDashboardComponent,
  },

  {
    path: 'add',
    component: AddShipperComponent,
  },
  {
    path: 'addshipperwearhouse',
    component: AddshipperwearhouseComponent,
  }
  ,
  {
    path: 'shipperwearhouse',
    component: ShipperwearhouselistComponent,
  },
  {
    path: 'shipments',
    component: ShipmentsComponent,
  }
  ,
  {
    path: 'pendingshipments',
    component: ReturnshipmentsComponent,
  }
  ,
  {
    path: 'codshipments',
    component: CodshipmentsComponent,
  },
  {
    path: 'shipmentissue',
    component: ShipmentissueComponent,
  },
  {
    path: 'ledgers',
    component: ShipperLedgerComponent,
  }
  ,{
    path: 'addledgers/:id',
    component: AddShipperLedgerComponent,
  }
  ,{
    path: 'addledgers',
    component: AddShipperLedgerComponent,
  }
  ,{
    path: 'printlable',
    component: PrintlablesComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipperRoutingModule { }
