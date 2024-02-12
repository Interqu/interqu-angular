import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from 'src/environments/environments';
import { AuthenticationRequestService } from './AuthenticationRequestService';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private authenticationRequestService: AuthenticationRequestService
  ) {}

  login(credentials: { email: string; password: string }) {
    return this.authenticationRequestService
      .authenticate(credentials)
      .pipe(tap((res) => this.setSession(res)));
  }

  logout() {
    localStorage.removeItem(environment.interqu_secure_token_key);
    localStorage.removeItem(environment.interqu_redirectUrl_key);
  }

  private setSession(authResult: any) {
    localStorage.setItem(environment.interqu_secure_token_key, authResult.jwt);
  }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem(environment.interqu_secure_token_key);
    if (token != null && token != 'undefined') {
      return !this.jwtHelper.isTokenExpired(token);
    } else {
      // remove non-valid jwt
      localStorage.removeItem(environment.interqu_secure_token_key);
    }
    return false;
  }
}
