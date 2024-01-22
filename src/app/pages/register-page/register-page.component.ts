import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent {
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
