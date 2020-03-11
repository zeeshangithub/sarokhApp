import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { DealersComponent } from './dealers/dealers.component';


const routes: Routes = [
  {
		path: '',
		component: DealersComponent,
  },
  {
		path: 'add',
		component: AddDealerComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DealerRoutingModule { }
