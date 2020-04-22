import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./shipper/shipper.module').then(m => m.ShipperModule)
  },
  {
    path: 'shipper',
    loadChildren: () => import('./shipper/shipper.module').then(m => m.ShipperModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignupRoutingModule { }
