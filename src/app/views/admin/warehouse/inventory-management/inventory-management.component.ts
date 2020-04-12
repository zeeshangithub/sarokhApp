import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-inventory-management',
  templateUrl: './inventory-management.component.html',
  styleUrls: ['./inventory-management.component.css']
})
export class InventoryManagementComponent implements OnInit {

  public inventoryMangement;

  constructor(private InventoryManagement: AdminService) { }

  ngOnInit(): void {
    this.getInventoryManagement();
  }

  getInventoryManagement() {
    this.InventoryManagement.fetchInventoryManagement().subscribe(res => {
      this.inventoryMangement = res.data
    })
  }

}
