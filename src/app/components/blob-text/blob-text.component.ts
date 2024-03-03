import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blob-text',
  templateUrl: './blob-text.component.html',
  styleUrls: ['./blob-text.component.css'],
})
export class BlobTextComponent {
  @Input() data: string[] = [];
  @Input() color: string = '';
  @Input() size: string = 'text-sm';
}
