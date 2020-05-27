import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddShipperComponent } from './add-shipper/add-shipper.component';
import { AddBusinessComponent } from './add-business/add-business.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'shipper',
    pathMatch: 'full'
  },
  {
    path: 'shipper',
    component: AddShipperComponent
  },
  {
    path: 'business',
    component: AddBusinessComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipperRoutingModule { }
