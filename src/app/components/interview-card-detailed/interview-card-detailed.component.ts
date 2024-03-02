import { Component, Input } from '@angular/core';
import { InterviewSelectionData } from 'src/app/pages/interview-select/interview-select.component';

@Component({
  selector: 'app-interview-card-detailed',
  templateUrl: './interview-card-detailed.component.html',
  styleUrls: ['./interview-card-detailed.component.css'],
})
export class InterviewCardDetailedComponent {
  @Input() data: InterviewSelectionData;

  constructor() {
    this.data = {
      title: '',
      description: '',
      companies: [],
      skills: [],
      stars: 0,
      numAttempted: 0,
      average_audio_rating: 0,
      average_context_rating: 0,
      average_video_rating: 0,
      average_overall_rating: 0,
      question_id: '',
      tips: [],
      employers_look_for: [],
      avoid_mentioning: [],
    };
  }
}
