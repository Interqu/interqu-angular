import { Component } from '@angular/core';
import { GenerateDetailsService } from 'src/app/services/generate-details.service';

@Component({
  selector: 'app-interview-history',
  templateUrl: './interview-history.component.html',
  styleUrls: ['./interview-history.component.css']
})
export class InterviewHistoryComponent {
  constructor(private commonService: GenerateDetailsService) {}
  
  loadDetails: boolean = true;


  ngOnInit(): void {
    this.commonService.unload
    .subscribe(() => {
      this.loadDetails = false;
    });
  }
}
