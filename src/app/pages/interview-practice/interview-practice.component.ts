import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interview-practice',
  templateUrl: './interview-practice.component.html',
  styleUrls: ['./interview-practice.component.css']
})
export class InterviewPracticeComponent implements OnInit {
  video: any;
  accessBtn: any;
  recordBtn: any;
  stopBtn: any;
  restartBtn: any;
  submitBtn: any;
  countdown: any;
  countdownNum: any;
  question: any;
  time: any;
  progressBarFill: any;
  progressBar: any;
  duration: number = 120;
  chunks: any[] = [];
  mediaRecorder: any;
  countDownInterval: any;
  questionData: any = {
    Question: "What is the answer to life?" // Placeholder, replace with actual question data
  };

  constructor() { }

  ngOnInit(): void {
    this.video = document.getElementById("video");
    this.accessBtn = document.getElementById("access-camera");
    this.recordBtn = document.getElementById("record-btn");
    this.stopBtn = document.getElementById("stop-btn");
    this.restartBtn = document.getElementById("restart-btn");
    this.submitBtn = document.getElementById("submit-btn");
    this.countdown = document.getElementById("countdown");
    this.countdownNum = document.getElementById("countdown-num");
    this.question = document.getElementById("question");
    this.time = document.getElementById("time");
    this.progressBarFill = document.querySelector(".progress-bar-fill");
    this.progressBar = document.querySelector(".progress-bar");

    this.accessCamera();
  }

  startCountdown() {
    this.countdown.style.display = "block";
    let count = 3;
    this.countdownNum.textContent = count;
    const countdownInterval = setInterval(() => {
      count--;
      this.countdownNum.textContent = count;
      if (count === 0) {
        clearInterval(countdownInterval);
        this.countdown.style.display = "none";
        this.mediaRecorder.start();
        this.stopBtn.style.display = "block";
  
        let currentTime = 0;
        this.progressBarFill.style.width = `0%`;
        this.progressBar.style.display = "block";
        this.countDownInterval = setInterval(() => {
          currentTime += 1;
          const progressPercentage = (currentTime / this.duration) * 100;
          this.progressBarFill.style.width = `${progressPercentage}%`;
          var minutes = Math.floor((this.duration - currentTime) / 60);
          var seconds = (this.duration - currentTime) % 60;
  
          this.time.innerHTML = minutes + " m " + seconds + " s";
          if (currentTime >= this.duration) {
            this.mediaRecorder.stop();
            clearInterval(this.countDownInterval);
          }
        }, 1000);
      }
    }, 1000);
  }

  async accessCamera() {
    try {
      this.video.srcObject = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      this.mediaRecorder = new MediaRecorder(this.video.srcObject);
      this.mediaRecorder.addEventListener("dataavailable", (event: any) => {
        this.chunks.push(event.data);
      });
      this.mediaRecorder.addEventListener("stop", () => {
        this.stopBtn.style.display = "none";
        this.restartBtn.style.display = "block";
        this.submitBtn.style.display = "block";
        this.progressBarFill.style.width = "100%";
        let source = document.createElement("source");
        source.src = URL.createObjectURL(new Blob(this.chunks, { type: "video/mp4" }));
        clearInterval(this.countDownInterval);
        this.video.appendChild(source);
        this.video.srcObject = null;
        this.video.autoplay = false;
        this.video.muted = false;
        this.video.controls = true;
        this.video.play();
      });
      this.recordBtn.style.display = "block";
      this.accessBtn.style.display = "none";
    } catch (error) {
      alert("An unexpected error has occurred!");
      console.error(error);
    }
  }

  recordBtnClick() {
    try {
      this.startCountdown();
      this.recordBtn.style.display = "none";
    } catch (error) {
      alert("An unexpected error has occurred!");
      console.error(error);
    }
  }

  stopBtnClick() {
    try {
      this.mediaRecorder.stop();
    } catch (error) {
      alert("An unexpected error has occurred!");
      console.error(error);
    }
  }

  submitBtnClick() {
    try {
      const blob = new Blob(this.chunks, { type: "video/mp4" });

      const formData = new FormData();
      formData.append("questionId", this.questionData.questionId);
      formData.append("video", blob, "video.mp4");
      // Replace the URL with your actual endpoint
      fetch("/api/processInterview", {
        method: "POST",
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        // Handle the server response
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
      this.chunks = [];
    } catch (error) {
      alert("An unexpected error has occurred!");
      console.error(error);
    }
  }

  restartBtnClick() {
    try {
      location.reload();
    } catch (error) {
      alert("An unexpected error has occurred!");
      console.error(error);
    }
  }

  ngOnDestroy() {
    window.onbeforeunload = null;
  }
}
