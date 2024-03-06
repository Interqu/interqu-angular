import { Component } from '@angular/core';

@Component({
  selector: 'app-generate-custom-interview',
  templateUrl: './generate-custom-interview.component.html',
  styleUrls: ['./generate-custom-interview.component.css'],
})
export class GenerateCustomInterviewComponent {
  isModalOpen = false;

  openModal(): void {
    this.isModalOpen = true;
  }
}
