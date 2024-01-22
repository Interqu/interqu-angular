
import { Component } from '@angular/core';
import { interview, dataset} from "./data";
import { MatSort, MatSortModule} from '@angular/material/sort';
import { ViewChild, AfterViewInit  } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { SelectionModel } from '@angular/cdk/collections';
import {MatRadioModule} from '@angular/material/radio';
import { GenerateDetailsService } from 'src/app/services/generate-details.service';


 

@Component({
  selector: 'app-interview-list',
  templateUrl: './interview-list.component.html',
  styleUrls: ['./interview-list.component.css'],
  standalone: true,
  imports: [MatTableModule, MatSortModule, MatInputModule, MatRadioModule],
})
export class InterviewListComponent  implements AfterViewInit {
  interviews: interview[] = dataset;
  displayedColumns: string[] = ['select', 'id', 'date', 'question', 'position','score','feedback'];
  dataSource = new MatTableDataSource<interview>( this.interviews )
  selection = new SelectionModel<interview>(true, []);
  constructor(private commonService: GenerateDetailsService) {}


  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  radioLabel(row: interview): string {
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }


  loadDetails(row?: interview, isSelected?:boolean){
    this.commonService.fillInDetails(row,isSelected);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
