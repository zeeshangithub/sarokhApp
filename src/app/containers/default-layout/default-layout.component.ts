import {Component } from '@angular/core';
import { navItems, ShipperNavItems } from '../../_nav';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public sidebarMinimized = false;
  public navItems: any;
  public showRole;

  constructor(private router: Router, private storage: LocalStorageService){
    if(localStorage.getItem('role') === 'admin'){
      this.navItems = navItems;
    }else{
      this.navItems = ShipperNavItems;
    }
    this.showRole = localStorage.getItem('role');
    console.log("this.showRole" , this.showRole)
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['login']);
  }
}
