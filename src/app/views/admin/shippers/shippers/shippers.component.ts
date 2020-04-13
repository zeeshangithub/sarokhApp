import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-shippers',
  templateUrl: './shippers.component.html',
  styleUrls: ['./shippers.component.css']
})
export class ShippersComponent implements OnInit {

  private allShippers;

  constructor(private AllShippers: AdminService) { }

  ngOnInit(): void {
    this.getAllShippers();
  }

  getAllShippers() {
    this.AllShippers.fetchAllShippers().subscribe(res => {
      this.allShippers = res;
    })
  }

}
