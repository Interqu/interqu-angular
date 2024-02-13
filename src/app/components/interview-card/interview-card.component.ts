import { Input, Component } from '@angular/core';

interface InterviewSelectionData {
  title: string,
  description: string,
  tag: string,
  language: string,
  stars: number,
  numAttempted: number,
}

@Component({
  selector: 'app-interview-card',
  templateUrl: './interview-card.component.html',
  styleUrls: ['./interview-card.component.css']
})
export class InterviewCardComponent {
  @Input() title: string;
  @Input() description: string;
  @Input() tag: string;
  @Input() language: string;
  @Input() stars: number;
  @Input() numInterviewsAttempted: number;

  constructor() {
    this.title = "Default Title"
    this.description = "default value"
    this.tag = "default value"
    this.language = "default value"
    this.stars = 0
    this.numInterviewsAttempted = 101
  }
}
