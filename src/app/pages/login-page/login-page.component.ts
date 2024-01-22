import { Component, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormsModule, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  emailForm: FormGroup;

  constructor() {
    this.emailForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email])
    });
  }

  onSubmit() {
    if (this.emailForm.valid) {
      console.log('Form Data:', this.emailForm.value);
      // Process your form data
    } else {
      console.log('Form is not valid!');
    }
  }

  get email() {
    return this.emailForm.get('email');
  }
}
