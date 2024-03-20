import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root',
})
export class S3Service {
  constructor(private http: HttpClient) {}

  data: any;

  getPresignedUrl(fileName: string): Observable<any> {
    const token = localStorage.getItem(environment.interqu_secure_token_key);

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token,
    });
    const params = new HttpParams().set('fileName', fileName);

    return this.http.get<any>(
      environment.interqu_backend_server_url + '/api/s3/generate-presigned-url',
      {
        headers: headers,
        params: params
      }
    );
  }
}
