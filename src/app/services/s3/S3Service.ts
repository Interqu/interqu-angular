import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Observable, filter, map } from 'rxjs';
import { environment } from 'src/environments/environments';
import { PresignedUrlObject } from 'src/app/pages/interview-practice/interview-practice.component';

@Injectable({
  providedIn: 'root',
})
export class S3Service {
  constructor(private http: HttpClient) {}

  data: any;

  getPresignedUrl(fileName: string): Observable<PresignedUrlObject> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    const params = new HttpParams().set('questionId', fileName);

    return this.http.get<any>(
      environment.interqu_backend_server_url +
        '/api/s3/generate-interview-upload-presigned-url',
      {
        headers: headers,
        params: params,
      }
    );
  }

  uploadFileFromPresigned(blob: Blob, presignedUrl: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'video/mp4',
    });

    return this.http
      .put(presignedUrl, blob, {
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
