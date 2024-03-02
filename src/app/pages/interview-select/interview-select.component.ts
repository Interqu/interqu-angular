import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InterviewService } from 'src/app/services/interview/InterviewService';

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
      console.log(res);
      res.forEach((question: any) => {
        let data: InterviewSelectionData = {
          title: question.position,
          description: question.question,
          companies: ['Meta', 'Apple', 'Google'],
          skills: ['c++'],
          stars: 79,
          numAttempted: 227,
          average_audio_rating: question.averageAudioRating,
          average_context_rating: question.averageContextRating,
          average_video_rating: question.averageVideoRating,
          average_overall_rating: question.averageOverallRating,
          question_id: question.questionId,
          tips: question.tips,
          employers_look_for: question.employersLookFor,
          avoid_mentioning: question.avoidSaying,
        };
        this.selection.push(data);
      });
    });
  }

  // public selection: Array<InterviewSelectionData> = [
  //   {
  //     title: 'Junior Software Developer',
  //     description:
  //       "Developing the backend for the upcoming gen-ai project 'genesis' or something...",
  //     tag: 'Apple',
  //     language: 'C++',
  //     stars: 89,
  //     numAttempted: 227,
  //   },
  //   {
  //     title: 'Senior Front-end Developer',
  //     description:
  //       "Leading and prototyping the UI for the upcoming gen-ai project 'genesis' or something...",
  //     tag: 'Apple',
  //     language: 'javascript',
  //     stars: 59,
  //     numAttempted: 257,
  //   },
  //   {
  //     title: 'Trash Picker-Upper',
  //     description: 'Picks up trash on the floor left by other developers',
  //     tag: 'Meta',
  //     language: 'N/A',
  //     stars: 0,
  //     numAttempted: 2,
  //   },
  //   {
  //     title: 'Senior Software Developer',
  //     description: 'Salary 200k to make facebook a more terrible product',
  //     tag: 'Meta',
  //     language: 'javascript',
  //     stars: 69,
  //     numAttempted: 379,
  //   },
  // ];
}
