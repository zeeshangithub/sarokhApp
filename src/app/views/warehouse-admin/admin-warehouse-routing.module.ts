import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { WarehouseAdminComponent } from './warehouse-admin.component';


const routes: Routes = [
  {
    path: '',
    component: WarehouseAdminComponent,
  },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WarehouseAdminRoutingModule { }
