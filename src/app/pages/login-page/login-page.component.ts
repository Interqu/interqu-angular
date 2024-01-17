import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  public rightPanelActive: boolean;
  @ViewChild('signInForm') form: NgForm;

  constructor() {
    this.rightPanelActive = false;
  }

  public submit(event: MouseEvent): void {

  }

  private isValid(input: HTMLInputElement): boolean {
    if (input.type === 'email') {
      return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value);
    }
    return input.value.trim() !== '';
  }

  public toggleRightPanel(): void {
    this.rightPanelActive = !this.rightPanelActive;
  }

  public validateForm(inputs: HTMLInputElement[], event: Event): void {
    let hasError = false;
    for (let input of inputs) {
      if (!this.isValid(input)) {
        hasError = true;
        input.classList.add('input_error');
      } else {
        input.classList.remove('input_error');
      }
    }
    if (hasError) {
      event.preventDefault();
      // Add wiggle effect
    }
  }
}
