import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
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
        params: params,
      }
    );
  }

  uploadFileFromPresigned(presignedUrl: string, file: File): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': file.type,
    });

    return this.http
      .put(presignedUrl, file, {
        headers: headers,
        reportProgress: true,
        observe: 'events',
      })
      .pipe(
        filter((event) => event.type === HttpEventType.UploadProgress),
        // Map the progress event to a percentage
        map((event) => {
        //   if (event.total) {
        //     return Math.round((100 * event.loaded) / event.total);
        //   }
          return 0; // In case there's no total size reported
        })
      );
  }
}
