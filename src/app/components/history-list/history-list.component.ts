import { Component, Input } from '@angular/core';
import { InterviewRowData } from 'src/app/pages/interview-history/data';
@Component({
  selector: 'app-history-list',
  templateUrl: './history-list.component.html',
  styleUrls: ['./history-list.component.css'],
})
export class HistoryListComponent {
  @Input() HistoryListData!: InterviewRowData[];

  constructor() {}
}
