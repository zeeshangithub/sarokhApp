import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Containers
import { DefaultLayoutComponent } from './containers';
import { P404Component } from './views/error/404.component';
import { P500Component } from './views/error/500.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';

import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '404',
    component: P404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: P500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'signup',
    loadChildren: () => import('./views/signup/signup.module').then(m => m.SignupModule),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'orders',
        canActivate: [AuthGuard],
        loadChildren: () => import('./views/orders/orders.module').then(m => m.OrdersModule)
      },
      {
        path: 'shipper',
        canActivate: [AuthGuard],
        loadChildren: () => import('./views/shipper/shipper.module').then(m => m.ShipperModule)
      },
      {
        path: 'Dealer',
        canActivate: [AuthGuard],
        loadChildren: () => import('./views/dealer/dealer.module').then(m => m.DealerModule)
      },
      // {
      //   path: 'driver',
      //   canActivate: [AuthGuard],
      //   loadChildren: () => import('./views/driver/driver.module').then(m => m.DriverModule)
      // },
      {
        path: 'user',
        canActivate: [AuthGuard],
        loadChildren: () => import('./views/user/user.module').then(m => m.UserModule)
      },
      {
        path: 'admin',
        canActivate: [AuthGuard],
        loadChildren: () => import('./views/admin/admin.module').then(m => m.AdminModule)
      },
      {
        path: 'warehouseadmin',
        canActivate: [AuthGuard],
        loadChildren: () => import('./views/warehouse-admin/warehouse-admin.module').then(m => m.WarehouseAdminModule)
      }
    ]
  },
  { path: '**', component: P404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
