import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../../services/admin.service';

@Component({
  selector: 'app-cod-collection',
  templateUrl: './cod-collection.component.html',
  styleUrls: ['./cod-collection.component.css']
})
export class CodCollectionComponent implements OnInit {

  public codCollection;

  constructor(private CodCollection: AdminService) { }

  ngOnInit(): void {
    this.getCodCollection();
  }

  getCodCollection() {
    this.CodCollection.fetchCodCollection().subscribe(res => {
      this.codCollection = res.data
    })
  }

}
