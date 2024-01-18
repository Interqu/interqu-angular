
import { Component } from '@angular/core';
import { interview, dataset} from "./data";
import { MatSort, MatSortHeader, MatSortModule, Sort} from '@angular/material/sort';
import { ViewChild, AfterViewInit, OnInit  } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
 

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css'],
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatFormFieldModule, MatInputModule],
})
export class InterviewListComponent  implements AfterViewInit {
  interviews: interview[] = dataset;
  displayedColumns: string[] = ['id', 'date', 'question', 'position','score','feedback'];
  dataSource = new MatTableDataSource<interview>( this.interviews )

  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  sortChange(sortState: Sort) {
    if (sortState.direction=="asc") {
    } else if (sortState.direction=="desc"){
    } else{
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
