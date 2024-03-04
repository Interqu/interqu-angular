import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class VerificationService {
  constructor(private http: HttpClient) {}

  data: any;

  verifyUser(token: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'text/plain',
    });
    return this.http.post<string>(
      environment.interqu_backend_server_url + '/api/user/user-verification',
      token,
      { headers: headers }
    );
  }
}
