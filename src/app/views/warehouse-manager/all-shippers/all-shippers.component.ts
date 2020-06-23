import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin.service';

@Component({
  selector: 'app-all-shippers',
  templateUrl: './all-shippers.component.html',
  styleUrls: ['./all-shippers.component.css']
})
export class AllShippersComponent implements OnInit {

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
