import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SarokhwearhouseService {

  constructor(private http: HttpClient) { }
  GetSarokhWerahouseList(){
    let shipperId =  localStorage.getItem('_id')
    console.log(shipperId)
    return this.http.get<any>(`${environment.apiURL}sarokh-warehouse/get-list`);
  }
  AddSarokhWarehouse(sarokhwarehouse){
    let shipperId =  localStorage.getItem('_id')
    console.log(shipperId)
    return this.http.post<any>(`${environment.apiURL}sarokh-warehouse/add` , sarokhwarehouse);
  }
  DeleteSarokhWearhouse(id: string){
    return this.http.delete<any>(`${environment.apiURL}/sarokh-warehouse/delete/${id}`, {});
  }
  fetchSingleWarehouse(id: string) {
    return this.http.get<any>(`${environment.apiURL}sarokh-warehouse/get-details/${id}`);
  }
  updateSarokhWearhouse(sarokhwarehouse){
 
    return this.http.put<any>(`${environment.apiURL}shipper-warehouse/update` , sarokhwarehouse);
  } 
}
