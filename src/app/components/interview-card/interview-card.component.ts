import { Input, Component } from '@angular/core';
import { InterviewSelectionData } from 'src/app/pages/interview-select/interview-select.component';

@Component({
  selector: 'app-interview-card',
  templateUrl: './interview-card.component.html',
  styleUrls: ['./interview-card.component.css'],
})
export class InterviewCardComponent {
  @Input() data: InterviewSelectionData;
  showPopup = false;

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
      verified: false,
      question_id: '',
      tips: [],
      employers_look_for: [],
      avoid_mentioning: [],
    };
  }
  togglePopup() {
    console.log(this.showPopup);
    this.showPopup = !this.showPopup;
  }
}
