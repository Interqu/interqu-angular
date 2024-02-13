import { Component } from '@angular/core';

interface InterviewSelectionData {
  title: string,
  description: string,
  tag: string,
  language: string,
  stars: number,
  numAttempted: number,
}

@Component({
  selector: 'app-interview-select',
  templateUrl: './interview-select.component.html',
  styleUrls: ['./interview-select.component.css']
})
export class InterviewSelectComponent {
  public selection: Array<InterviewSelectionData> = [
    {
      title: "Junior Software Developer",
      description: "Developing the backend for the upcoming gen-ai project 'genesis' or something...",
      tag: "Apple",
      language: "C++",
      stars: 89,
      numAttempted: 227,
    },
    {
      title: "Senior Front-end Developer",
      description: "Leading and prototyping the UI for the upcoming gen-ai project 'genesis' or something...",
      tag: "Apple",
      language: "javascript",
      stars: 59,
      numAttempted: 257,
    },
    {
      title: "Trash Picker-Upper",
      description: "Picks up trash on the floor left by other developers",
      tag: "Meta",
      language: "N/A",
      stars: 0,
      numAttempted: 2,
    },
    {
      title: "Senior Software Developer",
      description: "Salary 200k to make facebook a more terrible product",
      tag: "Meta",
      language: "javascript",
      stars: 69,
      numAttempted: 379,
    },
  ]
}
