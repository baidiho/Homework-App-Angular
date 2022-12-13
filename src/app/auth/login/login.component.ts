import { AuthService } from './../../core/services/auth.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { LoginRegistrData } from 'src/app/core/services/types/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    console.log(this.signInForm.value.email);
  }

  /***************Declaration of validation on client-side variables**************************/

  public validationErrorMessage: string;
  public activeValidationErrorMessage: boolean;
  /***************Declaration of request variables**************************/

  public signInForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  /*  In onSubmit function else expression will used to send HTTPRequest */
  onSubmit() {
    if (!this.signInForm.valid) {
      this.validationErrorMessage = 'Authentication error. Please try again';
      this.activeValidationErrorMessage = true;
      setTimeout(() => (this.activeValidationErrorMessage = false), 2000);
    } else {
      const requestBody: LoginRegistrData = {
        user: {
          email: this.signInForm.value.email,
          password: this.signInForm.value.password,
        },
      };
      this.authService.login(requestBody);
    }
  }
}
