import { Component, Input, OnInit } from '@angular/core';
import { interview } from '../../pages/interview-history/data';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsComponent {

  // Sample data - Replace with actual data from your service
  bodyLanguageAndToneFeedback: string = "";
  responsesFeedback: string = "";
  score: number = 0.0;
  video: string = "your_video_source.mp4";
  question: string = "";
  date: string = "";
  position: string = "";
  @Input() Details: interview;


  ngOnInit(): void {
    this.bodyLanguageAndToneFeedback = this.Details.Feedback;
    this.responsesFeedback= this.Details.Feedback;
    this.score= this.Details.Score;
    // this.video= this.Details.video;
    this.question= this.Details.Question;
    this.date= this.Details.Date;
    this.position= this.Details.Position;
  }

}
