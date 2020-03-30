import { Component, OnInit } from '@angular/core';
import { DealerService } from '../../../services/dealer.service';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  public inventoryList;

  constructor(private inventory: DealerService) { }

  ngOnInit(): void {
    this.getInventory();
  }
  getInventory() {
    this.inventory.fetchDealersInventory().subscribe(res => {
      this.inventoryList = res.data
    })
  }

}
