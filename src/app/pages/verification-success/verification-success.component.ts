import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VerificationService } from 'src/app/services/verification/VerficationService';
@Component({
  selector: 'app-verification-success',
  templateUrl: './verification-success.component.html',
  styleUrls: ['./verification-success.component.css'],
})
export class VerificationSuccessComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private verificationService: VerificationService
  ) {}

  dataLoaded = false;
  success = false;

  h1 = 'Unable to verify account';
  h2 = "The link you've entered is invalid.";

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((params) => {
      const token = params['token'];
      if (token == undefined) {
        this.dataLoaded = true;
      } else {
        this.verificationService.verifyUser(token).subscribe({
          next: (res: string) => {
            this.h1 = 'Verification Success.';
            this.h2 = 'Your account has been verified.';
            this.dataLoaded = true;
            this.success = true;
          },
          error: (err) => {
            console.log(err);
            this.h2 = err.error;
            this.dataLoaded = true;
          },
        });
      }
    });
  }
  ngOnDestroy(): void {}
}
