export interface interview {
    id: number,
    date: string,
    question: string,
    position: string,
    score: number,
    feedback: string,
}

export const displayedColumns: string[] = ['id', 'date', 'question', 'position','score','feedback'];

export const dataset: interview[] = [
    {
      id: 1,
      date: "2023-06-22",
      question: "Tell me about yourself",
      position: "Software Engineer",
      score: 8.5,
      feedback: "Great job!",
    },
    {
      id: 2,
      date: "2023-06-23",
      question: "What is your greatest weakness?",
      position: "Product Manager",
      score: 7.2,
      feedback: "Some improvement needed.",
    },
    {
      id: 3,
      date: "2023-06-24",
      question: "Why do you want to work here?",
      position: "Software Engineer",
      score: 9.0,
      feedback: "Excellent performance!",
    },
    {
      id: 4,
      date: "2023-06-25",
      question: "Describe a challenging situation you faced at work.",
      position: "Product Manager",
      score: 8.7,
      feedback: "Impressive!",
    },
  ];