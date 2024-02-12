import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationRequestService {
  constructor(private http: HttpClient) {}

  authenticate(credentials: {
    email: string;
    password: string;
  }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', // Content type for JSON
    });
    return this.http.post<any>(
      environment.interqu_backend_server_url +
        environment.interqu_backend_authenticate_url,
      credentials,
      {
        headers: headers,
      }
    );
  }

  //TODO Register request
}
