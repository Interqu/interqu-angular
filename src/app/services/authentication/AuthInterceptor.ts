import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './AuthService';
import { environment } from 'src/environments/environments';
import {
  AUTHORIZATION_HEADER,
  AUTHORIZAION_PREFIX,
} from 'src/app/constants/Constants';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const idToken = localStorage.getItem(environment.interqu_secure_token_key);
    if (
      this.authService.isAuthenticated() &&
      req.url.includes(environment.interqu_backend_server_url)
    ) {
      // If user is authenticated and the request is going to Interqu backend, then add authorization token
      const cloned = req.clone({
        headers: req.headers.set(
          AUTHORIZATION_HEADER,
          AUTHORIZAION_PREFIX + idToken
        ),
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
