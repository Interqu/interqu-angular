import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  constructor(private http: HttpClient) {}

  data: any;

  getData(): Observable<any> {
    const token = localStorage.getItem(environment.interqu_secure_token_key);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    return this.http.get<any>(
      environment.interqu_backend_server_url + '/api/user/getInfo',
      {
        headers: headers,
      }
    );
  }
  uploadPfp(payload: {
    pfp: any;
  }): Observable<any> {
    const token = localStorage.getItem(environment.interqu_secure_token_key);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    return this.http.post<any>(
      environment.interqu_backend_server_url + '/api/user/getInfo',
      payload,
      {
        headers: headers,
      }
    );
  }
  
}
