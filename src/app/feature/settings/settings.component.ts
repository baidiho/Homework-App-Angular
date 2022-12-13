import { AuthService } from 'src/app/core/services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(public authService: AuthService) {}
  ngOnInit(): void {
    console.log(this.settingsForm.value);
  }

  public isError: boolean = false;
  public errorMessage: string;
  public settingsForm: FormGroup = new FormGroup({
    url: new FormControl(this.authService.userData.image, [
      Validators.required,
    ]),
    userName: new FormControl(this.authService.userData.username, [
      Validators.required,
    ]),
    bio: new FormControl('', [
      Validators.minLength(10),
      Validators.maxLength(50),
    ]),
    email: new FormControl(this.authService.userData.email, [
      Validators.email,
      Validators.required,
    ]),
    password: new FormControl('', [Validators.min(8)]),
  });

  /*  In onSubmit function else expression will used to send HTTPRequest */
  onSubmit() {
    if (!this.settingsForm.valid) {
      this.errorMessage = 'Something wrong with the form. Please try again';
      this.isError = true;
      setTimeout(() => (this.isError = false), 2000);
    } else {
      console.log(this.settingsForm.status);
    }
  }
}
