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
// export const dataset: InterviewRowData[] = [
//   {
//     interview_id: '1',
//     timestamp: '2023-06-22',
//     question: 'Tell me about yourself',
//     position: 'Software Engineer',
//     score: '76.42',
//     status: status.SUBMITTED,
//     link: '#',
//   },
//   {
//     interview_id: '1',
//     timestamp: '2023-06-22',
//     question: 'Tell me about yourself',
//     position: 'Software Engineer',
//     score: '76.42',
//     status: status.PROCESSING,
//     link: '#',
//   },
//   {
//     interview_id: '699c4844-7978-4560-94a7-5eef83334090',
//     timestamp: '2024-04-06T23:35:13.000+00:00',
//     question: 'Tell me about yourself',
//     position: 'Software Engineer',
//     score: '76.42',
//     status: status.DONE,
//     link: '/user/results?interviewId=eakajlfkj2hkl3h4y784',
//   },
//   {
//     interview_id: '906ca03d-0b04-466f-97c7-e366ed6bbbbb',
//     timestamp: '2024-04-06T23:35:13.000+00:00',
//     question:
//       'Can you describe a complex firmware project you worked on and how you managed the development process?',
//     position: 'Firmware Engineer',
//     score: '76.42',
//     status: status.DONE,
//     link: '/user/results?interviewId=906ca03d-0b04-466f-97c7-e366ed6bbbbb',
//   },
//   {
//     interview_id: '1',
//     timestamp: '2023-06-22',
//     question: 'Tell me about yourself',
//     position: 'Software Engineer',
//     score: '76.42',
//     status: status.ERROR,
//     link: '#',
//   },
// ];
