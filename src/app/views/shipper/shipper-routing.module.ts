import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { ShippersComponent } from './shippers/shippers.component';
import { AddshipperwearhouseComponent } from './shipperWearhouse/addshipperwearhouse/addshipperwearhouse.component';
import { ShipperwearhouselistComponent } from './shipperWearhouse/shipperwearhouselist/shipperwearhouselist.component';
import { AddsarokhwearhouseComponent } from './sarokhWearhouse/addsarokhwearhouse/addsarokhwearhouse.component';
import { SarokhwearhouselistComponent } from './sarokhWearhouse/sarokhwearhouselist/sarokhwearhouselist.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { ShipperDashboardComponent } from './shipper-dashboard/shipper-dashboard.component';
import { ReturnshipmentsComponent } from './returnshipments/returnshipments.component';
import { ShipmentsComponent } from './shipments/shipments.component';

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
    path: 'addsarokhwearhouse',
    component: AddsarokhwearhouseComponent,
  }
  ,
  {
    path: 'sarokhwearhouselist',
    component: SarokhwearhouselistComponent,
  }
  ,
  {
    path: 'shipments',
    component: ShipmentsComponent,
  }
  ,
  {
    path: 'returnshipments',
    component: ReturnshipmentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipperRoutingModule { }
