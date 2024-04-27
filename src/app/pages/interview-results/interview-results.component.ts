export enum VisualEmotions {
  ANGRY = 'ANGRY',
  SAD = 'SAD',
  FEAR = 'FEAR',
  DISGUST = 'DISGUST',
  HAPPY = 'HAPPY',
  SURPRISE = 'SURPRISE',
  NEUTRAL = 'NEUTRAL',
}

export enum AudioEmotions {
  NEUTRAL = 'NEUTRAL',
  CALM = 'CALM',
  HAPPY = 'HAPPY',
  SAD = 'SAD',
  ANGRY = 'ANGRY',
  FEAR = 'FEAR',
  DISGUST = 'DISGUST',
  SURPRISE = 'SURPRISE',
}

// Refer to database model
export interface InterviewResult {
  interview_id: string;
  file_id: string;
  user_id: string;
  question_id: string;
  status: string;
  question: Question;
  timestamp: Date;
  video_length: number;
  analysis: {
    overall: {
      overall_score: number;
      overall_summary: string;
    };
    video: {
      video_score: number;
      video_timestamps: VisualEmotions[];
      video_feedback: string;
    };
    audio: {
      audio_score: number;
      audio_timestamps: AudioEmotions[];
      audio_feedback: string;
    };
    context: {
      context_score: number;
      transcript: string;
      context_feedback: string;
    };
  };
  _class: string;
}
interface TimestampCount {
  [key: string]: number;
}

import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { InterviewService } from 'src/app/services/interview/InterviewService';
import { Question } from '../interview-select/interview-select.component';
import { ActivatedRoute } from '@angular/router';
Chart.register(...registerables);

@Component({
  selector: 'app-interview-results',
  templateUrl: './interview-results.component.html',
  styleUrls: ['./interview-results.component.css'],
})
export class InterviewResultsComponent {
  interviewId?: string | null;
  isLoaded!: boolean;
  truncatedSummary?: string;

  result: InterviewResult | null = null;

  constructor(
    private route: ActivatedRoute,
    private interviewService: InterviewService
  ) {
    this.isLoaded = false;
  }

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      this.interviewId = queryParams['interviewId'];
      if (this.interviewId != null) {
        this.interviewService.getResult(this.interviewId).subscribe(
          (res) => {
            this.result = res;
            this.isLoaded = true;
            this.truncatedSummary = this.truncateText(
              this.result.analysis.overall.overall_summary,
              500
            );
          },
          (err) => {
            this.result = null;
            this.isLoaded = false;
          }
        );
      }
    });
  }

  ngAfterViewInit() {}
  truncateText(text: string, maxLength: number): string {
    return text.length > maxLength
      ? `${text.substring(0, maxLength)}...`
      : text;
  }
}
