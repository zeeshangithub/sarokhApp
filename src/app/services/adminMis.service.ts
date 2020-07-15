import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminMisService {

  constructor(private http: HttpClient) { }

  receiveCashService(FormData) {
    return this.http.post<any>(`${environment.apiURL}finance/receive-cash-by-cashier`, FormData);
  }

  getLedgerList() {
    return this.http.get<any>(`${environment.apiURL}ledger/get-list`);
  }

  dispenseCashService(FormData, parentRole) {
    return this.http.post<any>(`${environment.apiURL}/finance/dispensing-cash/${parentRole}`, FormData);
  }

  upoadFileService(file) {
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<any>(`${environment.apiURL}upload-file`, formData);
  }

}
