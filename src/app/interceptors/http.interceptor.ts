import { Injectable } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {

  constructor(private authenticationService: AuthService) {}



  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

	request = request.clone({ headers: request.headers.set('Access-Control-Allow-Origin', '*') });
      if (!request.headers.has('Content-Type')) {
        request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }
    request = request.clone({ headers: request.headers.set('Accept', 'application/json') });
      return next.handle(request);
    }
}
