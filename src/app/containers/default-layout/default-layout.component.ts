import {Component, OnInit } from '@angular/core';
import { navItems, ShipperNavItems } from '../../_nav';
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
  public routerlink404 = "/base/cards"
  ngOnInit(): void {
    const  shipperID  = localStorage.getItem("id");
    this.shipperdetails.fetchshipperDetails(shipperID).subscribe(res => {
        this.shipperdata = res.user;
        console.log(this.shipperdata)

    })
}
  constructor(private router: Router, private storage: LocalStorageService,private shipperdetails : ShipperService){
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
