import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authentication/AuthService';
import { environment } from 'src/environments/environments';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent {
  emailForm: FormGroup;
  isInvalid: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.emailForm.valid) {
      this.login();
    } else {
      //TODO form not valid.
    }
  }

  login(): void {
    let email: string = this.emailForm.value.email;
    let password: string = this.emailForm.value.password;
    let credentials = { email: email, password: password };
    this.authService.login(credentials).subscribe(
      () => {
        const redirectUrl =
          localStorage.getItem(environment.interqu_redirectUrl_key) ||
          '/user/dashboard';
        localStorage.removeItem(environment.interqu_redirectUrl_key); // Clear the stored URL
        this.router.navigateByUrl(redirectUrl); // Redirect to the stored URL
      },
      (err) => {
        if (err.status == 403) {
          this.isInvalid = true;
        } else {
          //TODO handle unexpected error here
        }
      }
    );
  }

  get email() {
    return this.emailForm.get('email');
  }

  get password() {
    return this.emailForm.get('password');
  }
}
