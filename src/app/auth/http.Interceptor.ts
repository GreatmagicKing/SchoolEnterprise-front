import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class HttpInterceptor implements HttpInterceptor {
  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(req.url!='http://localhost:8080/login'){
      console.log(req.url);
      const token=sessionStorage.getItem('token');
      const IntRequest = req.clone({ headers: req.headers.set('Authorization', token) });
      return next.handle(IntRequest);
    }else{
      return next.handle(req.clone({ headers: req.headers.set('null','null' ) }));
    }

  }
}
