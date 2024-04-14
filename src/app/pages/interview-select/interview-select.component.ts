import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InterviewService } from 'src/app/services/interview/InterviewService';

export interface Question {
  average_audio_rating: number;
  average_context_rating: number;
  average_overall_rating: number;
  average_video_rating: number;
  avoid_mentioning: string[];
  companies: string[];
  employers_look_for: string[];
  is_verified: boolean;
  position: string;
  question: string;
  question_id: string;
  rating: number;
  skills: string[];
  tips: string[];
}

export interface InterviewSelectionData {
  title: string;
  description: string;
  companies: string[];
  skills: string[];
  stars: number;
  numAttempted: number;
  average_audio_rating: number;
  average_context_rating: number;
  average_video_rating: number;
  average_overall_rating: number;
  question_id: string;
  verified: boolean;
  tips: string[];
  employers_look_for: string[];
  avoid_mentioning: string[];
}

@Component({
  selector: 'app-interview-select',
  templateUrl: './interview-select.component.html',
  styleUrls: ['./interview-select.component.css'],
})
export class InterviewSelectComponent {
  selection: InterviewSelectionData[] = [];

  constructor(
    private router: Router,
    private interviewService: InterviewService
  ) {}

  ngOnInit() {
    this.interviewService.getQuestions().subscribe((res) => {
      res.forEach((question: any) => {
        let data: InterviewSelectionData = {
          title: question.position,
          description: question.question,
          companies: question.companies,
          skills: question.skills,
          stars: question.rating,
          numAttempted: 227,
          average_audio_rating: question.average_audio_rating,
          average_context_rating: question.average_context_rating,
          average_video_rating: question.average_video_rating,
          average_overall_rating: question.average_overall_rating,
          verified: question.is_verified,
          question_id: question.question_id,
          tips: question.tips,
          employers_look_for: question.employers_look_for,
          avoid_mentioning: question.avoid_mentioning,
        };
        this.selection.push(data);
      });
    });
  }
}
