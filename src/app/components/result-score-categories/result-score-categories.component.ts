export enum BgColors {
  GREEN = 'bg-green-500',
  ORANGE = 'bg-orange-500',
  YELLOW = 'bg-yellow-500',
  RED = 'bg-red-500',
}

export enum TextColors {
  GREEN = 'text-green-500',
  ORANGE = 'text-orange-500',
  YELLOW = 'text-yellow-500',
  RED = 'text-red-500',
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-result-score-categories',
  templateUrl: './result-score-categories.component.html',
  styleUrls: ['./result-score-categories.component.css'],
})
export class ResultScoreCategoriesComponent {
  @Input() category!: string;
  @Input() score!: number;
  @Input() description!: string;
  @Input() icon_link!: string;

  bgColor: BgColors = BgColors.RED;
  textColor: TextColors = TextColors.RED;

  constructor() {}

  ngOnInit() {
    if (this.score >= 80) {
      this.bgColor = BgColors.GREEN;
      this.textColor = TextColors.GREEN;
    } else if (this.score >= 65) {
      this.bgColor = BgColors.ORANGE;
      this.textColor = TextColors.ORANGE;
    } else if (this.score >= 40) {
      this.bgColor = BgColors.YELLOW;
      this.textColor = TextColors.YELLOW;
    } else {
      this.bgColor = BgColors.RED;
      this.textColor = TextColors.RED;
    }
  }
}
