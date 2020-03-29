import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  addOrder(formData: any) {
    return this.http.post<any>(`${environment.apiURL}order/create-order`, formData);
  }

  getOrderId(shipperId) {
    return this.http.post<any>(`${environment.apiURL}order/create-order-id/${shipperId}`, {});
  }

  deleteOrder(Id) {
    return this.http.delete<any>(`${environment.apiURL}order/delete/${Id}`)
  }
  getOrderDetails(Id) {
    return this.http.get<any>(`${environment.apiURL}order/get-details/${Id}`);
  }
  getCityList() {
    return this.http.get<any>(`${environment.apiURL}city/get-list`);
  }
}
