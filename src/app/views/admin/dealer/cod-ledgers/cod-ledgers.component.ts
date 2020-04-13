import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-cod-ledgers',
  templateUrl: './cod-ledgers.component.html',
  styleUrls: ['./cod-ledgers.component.css']
})
export class CodLedgersComponent implements OnInit {

  public codLedgers;

  constructor(private CodLedgers: AdminService) { }

  ngOnInit(): void {
    this.getCodLedgers();
  }

  getCodLedgers() {
    this.CodLedgers.fetchCodLedgers().subscribe(res => {
      this.codLedgers = res.data
    })
  }

}
