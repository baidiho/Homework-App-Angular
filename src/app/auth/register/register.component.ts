import { AuthService } from './../../core/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginRegistrData } from 'src/app/core/services/types/types';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit(): void {}

  /*************** Declarations**************************/

  public validationError = false;
  public validationErrorMessage: string | null;
  public signUpForm: FormGroup = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit() {
    if (!this.signUpForm.valid) {
      this.validationErrorMessage = 'Registration error. Please try again';
      this.validationError = true;
      setTimeout(
        () => (
          (this.validationError = false), (this.validationErrorMessage = null)
        ),
        2000
      );
    } else {
      const requestBody: LoginRegistrData = {
        user: {
          email: this.signUpForm.value.email,
          password: this.signUpForm.value.password,
          username: this.signUpForm.value.userName,
        },
      };
      this.authService.registration(requestBody);
    }
  }
}
