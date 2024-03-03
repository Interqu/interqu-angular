import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-average-scores-bar',
  templateUrl: './average-scores-bar.component.html',
  styleUrls: ['./average-scores-bar.component.css'],
})
export class AverageScoresBarComponent {
  @Input() target: number = 0;
  @Input() text: string = '';
}
