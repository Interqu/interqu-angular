import { Component, Input } from '@angular/core';
import { InterviewSelectionData } from 'src/app/pages/interview-select/interview-select.component';

@Component({
  selector: 'app-interview-question-popup',
  templateUrl: './interview-question-popup.component.html',
  styleUrls: ['./interview-question-popup.component.css'],
})
export class InterviewQuestionPopupComponent {
  @Input() data: InterviewSelectionData;
  isPopupVisible = false;

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

  togglePopup(): void {
    this.isPopupVisible = !this.isPopupVisible;
  }

  closePopup(event: MouseEvent): void {
    if (!this.isPopupVisible) return;
    this.isPopupVisible = false;
  }
}
