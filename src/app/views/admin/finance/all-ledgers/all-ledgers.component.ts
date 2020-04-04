import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-all-ledgers',
  templateUrl: './all-ledgers.component.html',
  styleUrls: ['./all-ledgers.component.css']
})
export class AllLedgersComponent implements OnInit {

  public allLedgers;

  constructor(private ledgers: AdminService) { }

  ngOnInit(): void {
    this.getAllLedgers();
  }

  getAllLedgers() {
    this.ledgers.fetchAllLedgers().subscribe(res => {
      this.allLedgers = res.data
    })
  }

}
