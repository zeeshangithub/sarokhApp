import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { ShippersComponent } from './shippers/shippers.component';
import { AddshipperwearhouseComponent } from './shipperWearhouse/addshipperwearhouse/addshipperwearhouse.component';
import { ShipperwearhouselistComponent } from './shipperWearhouse/shipperwearhouselist/shipperwearhouselist.component';
import { AddsarokhwearhouseComponent } from './sarokhWearhouse/addsarokhwearhouse/addsarokhwearhouse.component';
import { SarokhwearhouselistComponent } from './sarokhWearhouse/sarokhwearhouselist/sarokhwearhouselist.component';

const routes: Routes = [
  {
		path: '',
		component: ShippersComponent,
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
		path: 'shipperwearhouselist',
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipperRoutingModule { }
