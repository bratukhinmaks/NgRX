import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {PercistentService} from "./percistent.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.persict.get('token');
    req = req.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ''
      }
    })
    return next.handle(req)
  }

  constructor(private persict: PercistentService) { }
}
