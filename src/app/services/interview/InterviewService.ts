import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environments';
import { InterviewResult } from 'src/app/pages/interview-results/interview-results.component';

@Injectable({
  providedIn: 'root',
})
export class InterviewService {
  constructor(private http: HttpClient) {}

  getQuestions(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<string>(
      environment.interqu_backend_server_url + '/api/interview/getQuestions',
      { headers: headers }
    );
  }

  getResult(interviewId: string): Observable<InterviewResult> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<InterviewResult>(
      environment.interqu_backend_server_url +
        '/api/interview/getInterviewResult',
      { headers: headers, interview_id: interviewId }
    );
  }

  getAllInterviewResult(): Observable<InterviewResult[]> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post<InterviewResult[]>(
      environment.interqu_backend_server_url +
        '/api/interview/getInterviewResult',
      { headers: headers }
    );
  }
}
