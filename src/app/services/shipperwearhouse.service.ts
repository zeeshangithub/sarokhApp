import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ShipperWearhouseService {

  constructor(private http: HttpClient) { }
  GetShipperWerahouseList(){
    let shipperId =  localStorage.getItem('_id')
    console.log(shipperId)
    return this.http.get<any>(`${environment.apiURL}shipper-warehouse/get-list/`);
  }
  AddShipperWearhouse(shipperwarehouse){
    let shipperId =  localStorage.getItem('_id')
    console.log(shipperId)
    return this.http.post<any>(`${environment.apiURL}shipper-warehouse/add` , shipperwarehouse);
  }
  DeleteShipperWearhouse(id: string){
    return this.http.delete<any>(`${environment.apiURL}shipper-warehouse/delete/${id}`);
  }
  fetchSingleWarehouse(id: string) {
    return this.http.get<any>(`${environment.apiURL}shipper-warehouse/get-details/${id}`);
  }
  updateShipperWearhouse(shipperwarehouse){
 
    return this.http.put<any>(`${environment.apiURL}shipper-warehouse/update` , shipperwarehouse);
  }
}
