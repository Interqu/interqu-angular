import { Component, OnInit } from '@angular/core';
import { GenerateDetailsService } from 'src/app/services/generate-details.service';
import { interview } from '../interview-list/data';

@Component({
  selector: 'app-interview-details',
  templateUrl: './interview-details.component.html',
  styleUrls: ['./interview-details.component.css']
})
export class InterviewDetailsComponent implements OnInit {
  constructor(private commonService: GenerateDetailsService) {}

  // Sample data - Replace with actual data from your service
  bodyLanguageAndToneFeedback: string = "";
  responsesFeedback: string = "";
  score: number = 0.0;
  video: string = "your_video_source.mp4";
  question: string = "";
  date: string = "";
  position: string = "";

  ngOnInit(): void {
    // Fetch interview results data from your service here
    // Assign the fetched data to the corresponding variables
    this.commonService.rowSelected
    .subscribe((data:interview) => {
      this.bodyLanguageAndToneFeedback = data.feedback;
      this.responsesFeedback = data.feedback;
      this.score = data.score;
      this.position = data.position;
      this.question = data.question;
      this.date = data.date;
    });
  }

}
