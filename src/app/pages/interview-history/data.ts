export enum status {
  SUBMITTED = 'Submitted',
  PROCESSING = 'Processing',
  DONE = 'Complete',
  ERROR = 'Error',
}

export interface InterviewRowData {
  interview_id: string;
  question: string;
  position: string;
  timestamp: string;
  score: string;
  status: status;
  link: string;
}
export const dataset: InterviewRowData[] = [
  {
    interview_id: '1',
    timestamp: '2023-06-22',
    question: 'Tell me about yourself',
    position: 'Software Engineer',
    score: '76.42',
    status: status.SUBMITTED,
    link: '#',
  },
  {
    interview_id: '1',
    timestamp: '2023-06-22',
    question: 'Tell me about yourself',
    position: 'Software Engineer',
    score: '76.42',
    status: status.PROCESSING,
    link: '#',
  },
  {
    interview_id: '1',
    timestamp: '2023-06-22',
    question: 'Tell me about yourself',
    position: 'Software Engineer',
    score: '76.42',
    status: status.DONE,
    link: '/user/results',
  },
  {
    interview_id: '1',
    timestamp: '2023-06-22',
    question: 'Tell me about yourself',
    position: 'Software Engineer',
    score: '76.42',
    status: status.DONE,
    link: '/user/results',
  },
  {
    interview_id: '1',
    timestamp: '2023-06-22',
    question: 'Tell me about yourself',
    position: 'Software Engineer',
    score: '76.42',
    status: status.ERROR,
    link: '#',
  },
];
