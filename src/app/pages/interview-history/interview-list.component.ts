import { Component, OnInit } from '@angular/core';
import { InterviewRowData, status } from './data';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import { AppSyncService } from 'src/app/services/appsync/AppSyncService';

import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { InterviewService } from 'src/app/services/interview/InterviewService';

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
})
export class InterviewListComponent implements OnInit {
  interviews: InterviewRowData[] = [];

  constructor(
    private interviewService: InterviewService,
    private appSyncService: AppSyncService
  ) {}

  ngOnInit() {
    this.appSyncService.openWebSocketConnection();
    this.interviewService.getAllInterviewResult().subscribe((res) => {
      res.forEach((result: any) => {
        var rowData: InterviewRowData = {
          interview_id: result.interview_id,
          question: result.question.question,
          position: result.question.position,
          timestamp: result.timestamp,
          score: result.analysis.overall.overall_score,
          status: status.DONE, //TODO
          link: '#/user/results?interviewId=' + result.interview_id,
        };
        this.interviews.push(rowData);
      });
    });
  }

  clickButton() {
    this.appSyncService.subscribe();
  }
}
