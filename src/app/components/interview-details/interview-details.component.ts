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
  bodyLanguageAndToneFeedback: string = "Your body language was positive, and your tone was clear and engaging.";
  responsesFeedback: string = "Your responses were well-structured and thoughtful.";
  score: number = 8;
  video: string = "your_video_source.mp4";

  ngOnInit(): void {
    // Fetch interview results data from your service here
    // Assign the fetched data to the corresponding variables
    this.commonService.rowSelected
    .subscribe((data:interview) => {
      this.bodyLanguageAndToneFeedback = data.feedback;
      this.responsesFeedback = data.feedback;
      this.score = data.score;
    });
  }

}
