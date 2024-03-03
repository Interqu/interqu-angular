import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dot-text',
  templateUrl: './dot-text.component.html',
  styleUrls: ['./dot-text.component.css'],
})
export class DotTextComponent {
  @Input() data: string[] = [];
}
