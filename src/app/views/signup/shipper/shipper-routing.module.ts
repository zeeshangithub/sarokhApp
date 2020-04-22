import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddShipperComponent } from './add-shipper/add-shipper.component';


const routes: Routes = [
  {
    path: '',
    component: AddShipperComponent
  },
  {
    path: 'shipper',
    component: AddShipperComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShipperRoutingModule { }
