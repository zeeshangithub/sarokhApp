import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: HttpClient) { }

  fetchSarokhWarehouses(){
    return this.http.get<any>(`${environment.apiURL}sarokh-warehouse/get-list`);
  }

  fetchShipperWarehouses(shipperId){
    return this.http.get<any>(`${environment.apiURL}shipper-warehouse/get-list/${shipperId}`);
  }
}
