import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { DealersComponent } from './dealers/dealers.component';
import { DealerDashboardComponent } from './dealer-dashboard/dealer-dashboard.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerRoutingModule { }
