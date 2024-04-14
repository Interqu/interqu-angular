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

export enum AudioEmotion {}

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
Chart.register(...registerables);

@Component({
  selector: 'app-interview-results',
  templateUrl: './interview-results.component.html',
  styleUrls: ['./interview-results.component.css'],
})
export class InterviewResultsComponent {
  // @ViewChild('radarChart') private chartRef!: ElementRef<HTMLCanvasElement>;
  // radarChart: any;
  // @ViewChild('videoChart')
  // private videoChartRef!: ElementRef<HTMLCanvasElement>;
  // videoChart: any;

  result: InterviewResult | null = null;

  constructor(private interviewService: InterviewService) {}

  ngOnInit() {
    this.interviewService.getResult('eakajlfkj2hkl3h4y784').subscribe((res) => {
      //TODO get from URL
      this.result = res;
    });
  }

  ngAfterViewInit() {}

  // ngAfterViewInit(): void {
  //   this.radarChart = new Chart(this.chartRef.nativeElement, {
  //     type: 'radar',
  //     data: {
  //       labels: [
  //         'Eye Contact',
  //         'Confidence/Flow',
  //         'Expression',
  //         'Filler Words',
  //         'Technical Knowledge',
  //         'Communication Skills',
  //         'Problem Solving',
  //         'Team Fit',
  //         'Enthusiasm',
  //         'Body Language',
  //       ],
  //       datasets: [
  //         {
  //           label: 'Recent Attempt',
  //           data: [65, 59, 90, 81, 56, 55, 40, 69, 80, 67],
  //           fill: true,
  //           backgroundColor: 'rgba(255, 99, 132, 0.2)',
  //           borderColor: 'rgb(255, 99, 132)',
  //           pointBackgroundColor: 'rgb(255, 99, 132)',
  //           pointBorderColor: '#fff',
  //           pointHoverBackgroundColor: '#fff',
  //           pointHoverBorderColor: 'rgb(255, 99, 132)',
  //         },
  //         {
  //           label: 'Previous Attempt',
  //           data: [99, 48, 40, 90, 96, 50, 90, 50, 60, 88],
  //           fill: true,
  //           backgroundColor: 'rgba(54, 162, 235, 0.2)',
  //           borderColor: 'rgb(54, 162, 235)',
  //           pointBackgroundColor: 'rgb(54, 162, 235)',
  //           pointBorderColor: '#fff',
  //           pointHoverBackgroundColor: '#fff',
  //           pointHoverBorderColor: 'rgb(54, 162, 235)',
  //         },
  //       ],
  //     },
  //     options: {
  //       elements: {
  //         line: {
  //           borderWidth: 3,
  //         },
  //       },
  //       scales: {
  //         r: {
  //           // 'r' for radial scale in Chart.js 3.x and later
  //           min: 1, // Minimum scale value
  //           max: 100, // Maximum scale value
  //           ticks: {
  //             stepSize: 10, // Step size
  //             // You can add more tick configuration here
  //           },
  //           // You can add more scale configuration here
  //         },
  //       },
  //     },
  //   });
  //   // this.initVideoChart();
  //}

  // private initVideoChart(): void {
  //   // Step 2: Process data to count occurrences of each timestamp string
  //   const timestamps = this.result.analysis.video.video_timestamps;
  //   const timestampCounts: TimestampCount =
  //     this.result.analysis.video.video_timestamps.reduce(
  //       (acc: TimestampCount, timestamp: string) => {
  //         acc[timestamp] = (acc[timestamp] || 0) + 1;
  //         return acc;
  //       },
  //       {}
  //     );

  //   // Step 3: Prepare chart data
  //   const chartLabels = Object.keys(timestampCounts);
  //   const chartData = chartLabels.map((label) => timestampCounts[label]);

  //   // Step 4: Set up Chart.js
  //   this.videoChart = new Chart(this.videoChartRef.nativeElement, {
  //     type: 'pie',
  //     data: {
  //       labels: chartLabels,
  //       datasets: [
  //         {
  //           label: '# of Occurrences',
  //           data: chartData,
  //           backgroundColor: [
  //             'rgba(255, 99, 132, 0.2)', // Red
  //             'rgba(54, 162, 235, 0.2)', // Blue
  //             'rgba(255, 206, 86, 0.2)', // Yellow
  //           ],
  //           borderColor: [
  //             'rgba(255,99,132,1)',
  //             'rgba(54, 162, 235, 1)',
  //             'rgba(255, 206, 86, 1)',
  //           ],
  //           borderWidth: 1,
  //         },
  //       ],
  //     },
  //     options: {
  //       scales: {
  //         y: {
  //           beginAtZero: true,
  //         },
  //       },
  //     },
  //   });
  // }
}
