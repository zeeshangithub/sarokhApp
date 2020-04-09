import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VeshicalService {

  constructor(private http: HttpClient) { }


  addVehical(formdata){
    return this.http.post<any>(`${environment.apiURL}vehicle/add` , formdata);
  }
}
