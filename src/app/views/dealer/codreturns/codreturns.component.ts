import { Component, OnInit } from '@angular/core';
import { DealerService } from '../../../services/dealer.service';

@Component({
  selector: 'app-codreturns',
  templateUrl: './codreturns.component.html',
  styleUrls: ['./codreturns.component.css']
})
export class CodreturnsComponent implements OnInit {

  public codReturn;

  constructor(private cod: DealerService) { }

  ngOnInit(): void {
    this.getCodReturn();
  }
  getCodReturn() {
    this.cod.fetchCodReturn().subscribe(res => {
      this.codReturn = res.data
    })
  }

}
