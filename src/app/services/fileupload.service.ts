import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {

  constructor(private http: HttpClient) { }

  fetchDealers() {
    return this.http.get<any>(`${environment.apiURL}dealer/get-list`);
  }



  fileupload(formData: any) {
    return this.http.post<any>(`${environment.apiURL}/upload-file`, formData);
  }
 
}
