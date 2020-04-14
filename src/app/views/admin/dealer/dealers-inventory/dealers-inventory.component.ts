import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-dealers-inventory',
  templateUrl: './dealers-inventory.component.html',
  styleUrls: ['./dealers-inventory.component.css']
})
export class DealersInventoryComponent implements OnInit {

  private dealersInventory;

  constructor(private DealersInventory: AdminService) { }

  ngOnInit(): void {
    this.getDealersInventory();
  }

  getDealersInventory() {
    this.DealersInventory.fetchDealersInventory().subscribe(res => {
      this.dealersInventory = res.data
    })
  }

}
