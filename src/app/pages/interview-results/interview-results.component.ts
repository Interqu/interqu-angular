export enum VisualEmotions {
  ANGRY = 'ANGRY',
  SAD = 'SAD',
  FEAR = 'FEAR',
  DISGUST = 'DISGUST',
  HAPPY = 'HAPPY',
  SURPRISE = 'SUPRISE',
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
  SUPRISE = 'SUPRISE',
}

export enum AudioEmotion {}

export interface InterviewResult {
  // Refer to database model
  id: string;
  file_id: string;
  user_id: string;
  question: {
    question_id: string;
    question: string;
    position: string;
    companies: string[];
  };
  timestamp: string;
  video_length: number;
  analysis: {
    overall: {
      overall_score: number;
      overall_summary: string;
    };
    video: {
      video_score: number;
      video_timestamps: string[]; //TODO convert to enum
      video_feedback: string;
    };
    audio: {
      audio_score: number;
      audio_timestamps: string[];
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
Chart.register(...registerables);

@Component({
  selector: 'app-interview-results',
  templateUrl: './interview-results.component.html',
  styleUrls: ['./interview-results.component.css'],
})
export class InterviewResultsComponent {
  @ViewChild('radarChart') private chartRef!: ElementRef<HTMLCanvasElement>;
  radarChart: any;
  @ViewChild('videoChart')
  private videoChartRef!: ElementRef<HTMLCanvasElement>;
  videoChart: any;

  result: InterviewResult;

  constructor() {
    // TEST DATA
    this.result = {
      id: '64cadd9e8e7f15c71d54f392',
      file_id:
        'asd[0oiq3hr-s0ad897fghwq32-9fg12-093gf2-fg2-8w9ef7gsd-897gf.mp4',
      user_id: 'c7b594ec-a363-4edb-8b22-e1f7fb8d8256',
      question: {
        question_id: 'a66b769f-3fe3-4c92-8178-c84e2a23013f',
        question: 'Tell me about a time you failed.',
        position: 'Firmware Engineer',
        companies: ['Meta', 'Apple', 'Google'],
      },
      timestamp: '2023-02-01',
      video_length: 48,
      analysis: {
        overall: {
          overall_score: 63.29999923706055,
          overall_summary:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        video: {
          video_score: 69.0,
          video_timestamps: [
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Happy',
            'Neutral',
            'Happy',
            'Happy',
            'Happy',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Happy',
            'Happy',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Happy',
            'Neutral',
            'Happy',
            'Neutral',
            'Neutral',
            'Neutral',
            'Happy',
            'Neutral',
            'Neutral',
            'Happy',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Happy',
            'Happy',
          ],
          video_feedback:
            "In this interview, you've shown a neutral facial expression for the majority of the time. While there were some moments of fear and surprise, it's important to remember that it's okay to show emotions during an interview. In fact, it can help convey your personality and provide a more human touch to the conversation. However, it's important to ensure that your emotions don't distract from the content of your answer.\n\n  When answering the question about a time you failed, consider being transparent and authentic with your emotions. It's okay to show vulnerability, as it can demonstrate your honesty and self-awareness. It's important to remember to maintain a professional demeanor and ensure that your emotions don't overwhelm the conversation.\n  \n  One tip to keep yourself calm and grounded during the interview is to focus on your breathing. Take slow, deep breaths to help regulate your emotions and provide a sense of calmness. Additionally, practice your answer to the question beforehand so that you can feel more confident and prepared when answering the question. Remember, it's okay to have failed in the past as long as you can show that you learned from the experience and grew as a result.",
        },
        audio: {
          audio_score: 33.0,
          audio_timestamps: [
            'Angry',
            'Sadness',
            'Angry',
            'Neutral',
            'Sadness',
            'Angry',
            'Neutral',
            'Sadness',
            'Sadness',
            'Neutral',
            'Neutral',
            'Angry',
            'Angry',
            'Angry',
            'Neutral',
            'Angry',
            'Neutral',
            'Angry',
            'Neutral',
            'Neutral',
            'Angry',
            'Angry',
            'Angry',
            'Neutral',
            'Neutral',
            'Neutral',
            'Neutral',
            'Sadness',
            'Sadness',
            'Neutral',
            'Angry',
            'Sadness',
            'Sadness',
            'Neutral',
            'Angry',
            'Angry',
            'Sadness',
            'Sadness',
            'Angry',
            'Sadness',
            'Angry',
            'Sadness',
            'Neutral',
            'Sadness',
            'Angry',
            'Angry',
            'Angry',
            'Neutral',
          ],
          audio_feedback:
            "In this interview, you've displayed an angry voice expression for the majority of the time. Your tone was sharp and intense, with a hint of frustration evident in your delivery. The audio conveyed a sense of aggression and impatience, which could potentially create a hostile atmosphere and hinder effective communication. To improve the audio, it is essential to work on managing your emotions and maintaining a more composed and neutral tone throughout the interview. This can be achieved by practicing deep breathing techniques and consciously monitoring your voice modulation.\n\n  Additionally, it is crucial to focus on active listening and allowing the other person to speak without interruption. By actively engaging in a two-way conversation and practicing empathy, you can create a more respectful and productive environment. It's important to remember that effective communication involves not only expressing your thoughts and concerns but also actively listening to others' perspectives and responding in a respectful manner. Taking the time to pause, reflect, and respond thoughtfully can help diffuse anger and promote a more constructive dialogue.\n  \n  Furthermore, incorporating positive language and choosing your words carefully can make a significant difference in the tone of the interview. Using more neutral and objective language instead of personal attacks or accusatory statements can help create a more professional and respectful atmosphere. Additionally, focusing on the main points and maintaining a clear and concise communication style can prevent misunderstandings and unnecessary conflict. Practice active communication techniques, such as paraphrasing and clarifying information, to ensure effective comprehension and minimize any potential anger-inducing miscommunication.\n  \n  By implementing these strategies and maintaining a composed and respectful demeanor, you can improve the audio of the interview and promote a more constructive and harmonious conversation.",
        },
        context: {
          context_score: 88.0,
          transcript:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          context_feedback:
            "In this interview, the content was excellent and very detailed. You demonstrated an impressive depth of knowledge and provided comprehensive responses to the questions asked. Your ability to articulate complex concepts clearly and concisely was commendable, making it easy for the audience to follow along. The content was well-structured, with a logical flow that allowed for a thorough exploration of the topic at hand. Your expertise and attention to detail were evident throughout, which greatly enhanced the overall quality of the interview.\n\n  To further improve the interview's content, one suggestion would be to incorporate more real-world examples or case studies. While your explanations were thorough, the addition of specific instances or practical applications can help illustrate your points and make them more relatable to the audience. By providing tangible examples, you can enhance the understanding and engagement of listeners, as well as demonstrate the practicality and relevance of your expertise.\n  \n  Another area of improvement could be to incorporate a more interactive approach. Although the content was detailed, there were limited opportunities for engagement with the interviewer or the audience. Consider integrating questions or prompts that encourage active participation, such as asking for opinions or experiences related to the topic. This will not only create a more dynamic and engaging conversation but also foster a sense of collaboration and inclusivity.\n  \n  Furthermore, it is essential to strike a balance between technical depth and accessibility. While it is admirable to provide detailed information, ensure that it is presented in a manner that can be easily understood by a broader audience. Avoid excessive jargon or technical terms without providing sufficient context or explanations. Strive to maintain clarity and simplicity in your explanations, allowing listeners with varying levels of familiarity with the subject matter to grasp the key points effectively.\n  \n  By incorporating these suggestions, such as utilizing real-world examples, promoting interactivity, and maintaining accessibility, you can further enhance the already excellent content of the interview. These improvements will not only engage and educate the audience but also solidify your position as an expert in the field.",
        },
      },
      _class: 'com.interqu.interviews.Result',
    };
  }

  ngAfterViewInit(): void {
    this.radarChart = new Chart(this.chartRef.nativeElement, {
      type: 'radar',
      data: {
        labels: [
          'Eye Contact',
          'Confidence/Flow',
          'Expression',
          'Filler Words',
          'Technical Knowledge',
          'Communication Skills',
          'Problem Solving',
          'Team Fit',
          'Enthusiasm',
          'Body Language',
        ],
        datasets: [
          {
            label: 'Recent Attempt',
            data: [65, 59, 90, 81, 56, 55, 40, 69, 80, 67],
            fill: true,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgb(255, 99, 132)',
            pointBackgroundColor: 'rgb(255, 99, 132)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Previous Attempt',
            data: [99, 48, 40, 90, 96, 50, 90, 50, 60, 88],
            fill: true,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgb(54, 162, 235)',
            pointBackgroundColor: 'rgb(54, 162, 235)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgb(54, 162, 235)',
          },
        ],
      },
      options: {
        elements: {
          line: {
            borderWidth: 3,
          },
        },
        scales: {
          r: {
            // 'r' for radial scale in Chart.js 3.x and later
            min: 1, // Minimum scale value
            max: 100, // Maximum scale value
            ticks: {
              stepSize: 10, // Step size
              // You can add more tick configuration here
            },
            // You can add more scale configuration here
          },
        },
      },
    });
    this.initVideoChart();
  }

  private initVideoChart(): void {
    // Step 2: Process data to count occurrences of each timestamp string
    const timestamps = this.result.analysis.video.video_timestamps;
    const timestampCounts: TimestampCount =
      this.result.analysis.video.video_timestamps.reduce(
        (acc: TimestampCount, timestamp: string) => {
          acc[timestamp] = (acc[timestamp] || 0) + 1;
          return acc;
        },
        {}
      );

    // Step 3: Prepare chart data
    const chartLabels = Object.keys(timestampCounts);
    const chartData = chartLabels.map((label) => timestampCounts[label]);

    // Step 4: Set up Chart.js
    this.videoChart = new Chart(this.videoChartRef.nativeElement, {
      type: 'pie',
      data: {
        labels: chartLabels,
        datasets: [
          {
            label: '# of Occurrences',
            data: chartData,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)', // Red
              'rgba(54, 162, 235, 0.2)', // Blue
              'rgba(255, 206, 86, 0.2)', // Yellow
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
