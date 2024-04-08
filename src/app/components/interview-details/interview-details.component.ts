import { Component, Input, OnInit } from '@angular/core';
import { InterviewRowData } from '../../pages/interview-history/data';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css'],
})
export class InterviewDetailsComponent {
  // Sample data - Replace with actual data from your service
  bodyLanguageAndToneFeedback: string = '';
  responsesFeedback: string = '';
  score: string = '';
  video: string = 'your_video_source.mp4';
  question: string = '';
  date: string = '';
  position: string = '';
  @Input() Details?: InterviewRowData;

  ngOnInit(): void {
    if (this.Details) {
      this.bodyLanguageAndToneFeedback = this.Details.position;
      this.responsesFeedback = this.Details.position;
      this.score = this.Details.score;
      // this.video= this.Details.video;
      this.question = this.Details.question;
      this.date = this.Details.timestamp;
      this.position = this.Details.position;
    }
  }
}
