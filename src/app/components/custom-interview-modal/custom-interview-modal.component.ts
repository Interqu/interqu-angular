// interview-modal.component.ts
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-interview-modal',
  templateUrl: './custom-interview-modal.component.html',
  styleUrls: ['./custom-interview-modal.component.css'],
})
export class CustomInterviewModalComponent {
  @Output() close = new EventEmitter<void>();
  jobTitle = '';
  company = '';
  description = '';
  fileName = 'No file selected';

  closeModal(event: MouseEvent): void {
    if ((event.target as Element).classList.contains('fixed')) {
      this.close.emit();
    }
  }

  uploadFile(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.fileName = file.name;
    }
  }

  submit() {}
}
