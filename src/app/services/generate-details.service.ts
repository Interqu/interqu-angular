import { Injectable, EventEmitter, Output  } from '@angular/core';
import { interview } from "../components/interview-list/data";

@Injectable({
  providedIn: 'root',
})
export class GenerateDetailsService {
  constructor() {}

  @Output() rowSelected = new EventEmitter<interview>();
  @Output() unload = new EventEmitter();

  unloadDetails(): void{
    this.unload.emit();
  }

  fillInDetails(row?: interview, isSelected?:boolean): void {
    console.log('Common function called from the service.');
      this.rowSelected.emit(row,);
  }
}
