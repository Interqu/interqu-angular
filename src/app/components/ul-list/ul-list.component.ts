import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-ul-list',
  templateUrl: './ul-list.component.html',
  styleUrls: ['./ul-list.component.css'],
})
export class UlListComponent {
  @Input() data: string[] = [];
  parsedString: string[][] = [];
  ngOnInit() {
    for (let i = 0; i < this.data.length; i++) {
      this.parsedString[i] = this.data[i].split(':');
    }
  }
}
