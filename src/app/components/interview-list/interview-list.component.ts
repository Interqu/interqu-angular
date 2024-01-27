
import { Component } from '@angular/core';
import { interview, dataset} from "./data";
import { MatSort, Sort, MatSortModule} from '@angular/material/sort';
import { ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';

import {animate, state, style, transition, trigger} from '@angular/animations';




 

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],

})
export class InterviewListComponent {
  interviews: interview[] = dataset;
  columnsToDisplay = ['ID', 'Date', 'Question', 'Position','Score','Feedback'];
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
  expandedElement: interview | null;
  dataSource = new MatTableDataSource<interview>( this.interviews )
  selection = new SelectionModel<interview>(true, []);


  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  sortData(sort: Sort) {
    console.log("Hello");
  }
}
