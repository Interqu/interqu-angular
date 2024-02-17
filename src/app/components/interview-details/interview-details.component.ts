import { Component, Input, OnInit } from '@angular/core';
import { interview } from '../../pages/interview-history/data';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsComponent {

  // Sample data - Replace with actual data from your service
  bodyLanguageAndToneOverall_Feedback: string = "";
  responsesOverall_Feedback: string = "";
  score: number = 0.0;
  video: string = "your_video_source.mp4";
  question: string = "";
  date: string = "";
  position: string = "";
  @Input() Details: interview;


  ngOnInit(): void {
    this.bodyLanguageAndToneOverall_Feedback = this.Details.Overall_Feedback;
    this.responsesOverall_Feedback= this.Details.Overall_Feedback;
    this.score= this.Details.Score;
    // this.video= this.Details.video;
    this.question= this.Details.Question;
    this.date= this.Details.Date;
    this.position= this.Details.Position;
  }

}
