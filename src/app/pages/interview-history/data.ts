export interface interview {
    ID: number,
    Date: string,
    Question: string,
    Position: string,
    Score: number,
    Feedback: string,
}

export const displayedColumns: string[] = ['ID', 'Date', 'Question', 'Position','Score','Feedback'];

export const dataset: interview[] = [
    {
      ID: 1,
      Date: "2023-06-22",
      Question: "Tell me about yourself",
      Position: "Software Engineer",
      Score: 8.5,
      Feedback: "Great job!",
    },
    {
      ID: 2,
      Date: "2023-06-23",
      Question: "What is your greatest weakness?",
      Position: "Product Manager",
      Score: 7.2,
      Feedback: "Some improvement needed.",
    },
    {
      ID: 3,
      Date: "2023-06-24",
      Question: "Why do you want to work here?",
      Position: "Software Engineer",
      Score: 9.0,
      Feedback: "Excellent performance!",
    },
    {
      ID: 4,
      Date: "2023-06-25",
      Question: "Describe a challenging situation you faced at work.",
      Position: "Product Manager",
      Score: 8.7,
      Feedback: "Impressive!",
    },
  ];