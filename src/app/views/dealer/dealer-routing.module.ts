import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { DealersComponent } from './dealers/dealers.component';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';
import { ViewdealerpointComponent } from './viewdealerpoint/viewdealerpoint.component';
import { InventoryComponent } from './inventory/inventory.component';
import { ServiceschargesComponent } from './servicescharges/servicescharges.component';
import { CodreturnsComponent } from './codreturns/codreturns.component';


const routes: Routes = [
  {
		path: '',
		component: DealersComponent,
  },
  {
		path: 'add',
		component: AddDealerComponent,
  },
  {
		path: 'Dashboard',
		component: DealerDashboardComponent,
  },
  {
		path: 'ViewDealerPoints',
		component: ViewdealerpointComponent,
  },
  {
		path: 'Inventory',
		component: InventoryComponent,
  },
  {
		path: 'ServicesCharges',
		component: ServiceschargesComponent,
  },
  {
		path: 'CODReturns',
		component: CodreturnsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerRoutingModule { }
