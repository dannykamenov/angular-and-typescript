import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Inject, Injectable, Provider } from '@angular/core';
import { BehaviorSubject, Observable, catchError } from 'rxjs';
import { API_ERROR } from './shared/constants';
import { Router } from '@angular/router';
const apiURL = 'http://localhost:3000/api';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor( @Inject(API_ERROR) private apiError: BehaviorSubject<Error | null>, private router: Router) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.startsWith('/api')) {
      req = req.clone({
        url: req.url.replace('/api', apiURL),
        withCredentials: true,
      });
    }
    return next.handle(req).pipe(
      catchError((err) => {
        this.apiError.next(err);
        this.router.navigate(['/error'])
        return [err];
      })
    );
  }
}

export const appInterceptorProvider: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: AppInterceptor,
  multi: true,
};
