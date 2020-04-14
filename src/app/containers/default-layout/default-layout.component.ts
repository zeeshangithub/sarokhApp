import {Component, OnInit } from '@angular/core';
import { navItems, ShipperNavItems , DealerNavItems, AdminWarehouseNavItems } from '../../_nav';
import { Router } from '@angular/router';
import {LocalStorageService} from 'ngx-webstorage';
import { ShipperService } from '../../services/shipper.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements  OnInit{
  public sidebarMinimized = false;
  public navItems: any;
  public showRole;
  shipperdata;
  public routerLinkVariable = "/orders/add";
  public routerlink404 = "/base/cards";
  public hidetoplink = true;
  ngOnInit(): void {
 
    if (localStorage.getItem('role') === 'Dealer'){
          this.hidetoplink = false;
    }
}
  constructor(private router: Router, private storage: LocalStorageService,private shipperdetails : ShipperService){
    if(localStorage.getItem('role') === 'admin'){
      
      this.navItems = navItems;
    }else if(localStorage.getItem('role') === 'shipper'){
      this.navItems = ShipperNavItems;
      const  shipperID  = localStorage.getItem("id");
      this.shipperdetails.fetchshipperDetails(shipperID).subscribe(res => {
          this.shipperdata = res.user;
          console.log(this.shipperdata)
  
      })
    }else if (localStorage.getItem('role') === 'Dealer'){
      this.navItems = DealerNavItems;
    }else {
      if (localStorage.getItem('role') === 'WarehouseUser'){
        this.navItems = AdminWarehouseNavItems;
      }
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
