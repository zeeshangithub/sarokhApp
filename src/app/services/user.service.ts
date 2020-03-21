import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(formData: any) {
    return this.http.post<any>(`${environment.apiURL}user/add`, formData);
  }

  addShipperUser(formData: any) {
    return this.http.post<any>(`${environment.apiURL}user/add-shipper-user/`, formData);
  }

  fetchUsers() {
    console.log()
    return this.http.get<any>(`${environment.apiURL}user/get-list`);
  }

  fetchUserRoles() {
    return this.http.get<any>(`${environment.apiURL}Role-role/get-list`);
  }
  DeleteUser(id: string) {
    return this.http.delete<any>(`${environment.apiURL}user/delete/${id}`);
  }

  fetchSingleUser(id: string) {
    return this.http.get<any>(`${environment.apiURL}user/get-details/${id}`);
  }
  updateShipperUser(formData: any) {
    return this.http.patch<any>(`${environment.apiURL}user/update/`, formData);
  }

}
