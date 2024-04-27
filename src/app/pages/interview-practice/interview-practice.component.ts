import { Component, Injectable, OnInit } from '@angular/core';
import { InterviewSelectionData } from '../interview-select/interview-select.component';
import { Router } from '@angular/router';
import { S3Service } from 'src/app/services/s3/S3Service';

export interface PresignedUrlObject {
  interview_id: string;
  presigned_url: string;
  video_file_name: string;
}

@Component({
  selector: 'app-interview-practice',
  templateUrl: './interview-practice.component.html',
  styleUrls: ['./interview-practice.component.css'],
})
@Injectable({
  providedIn: 'root',
})
export class InterviewPracticeComponent implements OnInit {
  //TODO (derek) use strongly typed variables
  private video: any;
  private accessBtn: any;
  private recordBtn: any;
  private stopBtn: any;
  private restartBtn: any;
  private submitBtn: any;
  private countdown: any;
  private countdownNum: any;
  private time: any;
  private progressBarFill: any;
  private progressBar: any;
  private duration: number = 300;
  private chunks: any[] = [];
  private mediaRecorder: any;
  private countDownInterval: any;
  data!: InterviewSelectionData;
  currentTime: number = 0;

  constructor(private router: Router, private s3Service: S3Service) {
    const state = this.router.getCurrentNavigation()?.extras.state;
    if (state) {
      this.data = state['data'];
    }
  }

  ngOnInit(): void {
    this.video = document.getElementById('video');
    this.accessBtn = document.getElementById('access-camera');
    this.recordBtn = document.getElementById('record-btn');
    this.stopBtn = document.getElementById('stop-btn');
    this.restartBtn = document.getElementById('restart-btn');
    this.submitBtn = document.getElementById('submit-btn');
    this.countdown = document.getElementById('countdown');
    this.countdownNum = document.getElementById('countdown-num');
    this.time = document.getElementById('time');
    this.progressBarFill = document.querySelector('.progress-bar-fill');
    this.progressBar = document.querySelector('.progress-bar');

    this.accessCamera();
  }

  startCountdown() {
    this.countdown.style.display = 'block';
    let count = 3;
    this.countdownNum.textContent = count;
    const countdownInterval = setInterval(() => {
      count--;
      this.countdownNum.textContent = count;
      if (count === 0) {
        clearInterval(countdownInterval);
        this.countdown.style.display = 'none';
        this.mediaRecorder.start();
        this.stopBtn.style.display = 'block';

        this.progressBarFill.style.width = `0%`;
        this.progressBar.style.display = 'block';
        this.countDownInterval = setInterval(() => {
          this.currentTime += 1;
          const progressPercentage = (this.currentTime / this.duration) * 100;
          this.progressBarFill.style.width = `${progressPercentage}%`;
          let minutes = Math.floor((this.duration - this.currentTime) / 60);
          let seconds = (this.duration - this.currentTime) % 60;

          this.time.innerHTML = minutes + ' m ' + seconds + ' s';
          if (this.currentTime >= this.duration) {
            this.mediaRecorder.stop();
            clearInterval(this.countDownInterval);
          }
        }, 1000);
      }
    }, 1000);
  }

  async accessCamera() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      this.video.srcObject = stream;
      this.video.muted = true;
      this.mediaRecorder = new MediaRecorder(stream);
      this.mediaRecorder.addEventListener('dataavailable', (event: any) => {
        this.chunks.push(event.data);
      });
      this.mediaRecorder.addEventListener('stop', async () => {
        stream.getTracks().forEach((track) => track.stop());
        this.stopBtn.style.display = 'none';
        this.restartBtn.style.display = 'block';
        this.submitBtn.style.display = 'block';
        this.progressBarFill.style.width = '100%';
        clearInterval(this.countDownInterval);
        let source = document.createElement('source');
        source.src = URL.createObjectURL(
          new Blob(this.chunks, { type: 'video/mp4' })
        );
        this.video.appendChild(source);
        this.video.srcObject = null;
        this.video.autoplay = false;
        this.video.muted = false;
        this.video.controls = true;
        this.video.play();
      });
      this.recordBtn.style.display = 'block';
      this.accessBtn.style.display = 'none';
    } catch (error) {
      alert(
        'An unexpected error has occurred! Do you have a camera or did you enable camera access?'
      );
    }
  }

  recordBtnClick() {
    try {
      this.startCountdown();
      this.recordBtn.style.display = 'none';
    } catch (error) {
      alert('An unexpected error has occurred!');
      console.error(error);
    }
  }

  stopBtnClick() {
    try {
      this.mediaRecorder.stop();
    } catch (error) {
      alert('An unexpected error has occurred!' + error);
    }
  }

  async submitBtnClick() {
    this.submitBtn.disabled = true;
    const questionId = this.data.question_id;
    this.s3Service
      .getPresignedUrl(questionId)
      .subscribe((res: PresignedUrlObject) => {
        const blob = new Blob(this.chunks, { type: 'video/mp4' });
        this.s3Service
          .uploadFileFromPresigned(blob, res.presigned_url)
          .subscribe(
            (progress) => {
              this.submitBtn.innerHTML = progress;
            },
            (error) => {
              //TODO (derek) make reupload function
              this.submitBtn.innerHTML = "Upload Failed";
              console.log(error);
            },
            () => {
              this.submitBtn.innerHTML = "Upload Success";
              this.router.navigate(['/user/history']);
            }
          );
      });
  }

  restartBtnClick() {
    try {
      location.reload();
    } catch (error) {
      alert('An unexpected error has occurred!');
      console.error(error);
    }
  }

  ngOnDestroy() {
    window.onbeforeunload = null;
  }

  setData(data: any) {
    this.data = data;
  }

  getData() {
    return this.data;
  }
}
