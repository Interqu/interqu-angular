import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';





Chart.register(...registerables);

@Component({
  selector: 'app-interview-results',
  templateUrl: './interview-results.component.html',
  styleUrls: ['./interview-results.component.css']
})
export class InterviewResultsComponent {
  @ViewChild('radarChart') private chartRef!: ElementRef<HTMLCanvasElement>;
  radarChart: any;



  ngAfterViewInit(): void {
    this.radarChart = new Chart(this.chartRef.nativeElement, {
      type: 'radar',
      data: {
        labels: [
          'Eye Contact',
          'Confidence/Flow',
          'Expression',
          'Filler Words',
          'Technical Knowledge',
          'Communication Skills',
          'Problem Solving',
          'Team Fit',
          'Enthusiasm',
          'Body Language'
        ],
        datasets: [{
          label: 'Recent Attempt',
          data: [65, 59, 90, 81, 56, 55, 40, 69, 80, 67],
          fill: true,
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(255, 99, 132)',
          pointBackgroundColor: 'rgb(255, 99, 132)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(255, 99, 132)'
        }, {
          label: 'Previous Attempt',
          data: [99, 48, 40, 90, 96, 50, 90, 50, 60, 88],
          fill: true,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgb(54, 162, 235)',
          pointBackgroundColor: 'rgb(54, 162, 235)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(54, 162, 235)'
        }]
      },
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        },
        scales: {
          r: { // 'r' for radial scale in Chart.js 3.x and later
            min: 1,   // Minimum scale value
            max: 100,   // Maximum scale value
            ticks: {
              stepSize: 10,  // Step size
              // You can add more tick configuration here
            },
            // You can add more scale configuration here
          }
        },
      },
    });
  }

}
