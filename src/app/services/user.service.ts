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

  addUser(formData:any){
    return this.http.post<any>(`${environment.apiURL}user/add`, formData);
  }

  fetchUsers(){
    console.log()
    return this.http.get<any>(`${environment.apiURL}user/get-list`);
  } 

  fetchUserRoles(){
    return this.http.get<any>(`${environment.apiURL}Role-role/get-list`);
  }
}
