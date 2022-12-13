import { Router } from '@angular/router';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User, LoginRegistrData, UserResponse } from './types/types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, public router: Router) {}

  public userData: User;
  public registerUrl: string = 'https://api.realworld.io/api/users';
  public loginURL: string = 'https://api.realworld.io/api/users/login';
  public getUserURL: string = 'https://api.realworld.io/api/user';
  public isLogged: boolean = false;
  public requestErrorMessage: string | null;
  public requestError: boolean = false;
  public registrationSucces = false;
  public currentUser: User;
  public header: HttpHeaders;

  registration(user: LoginRegistrData): void {
    this.http.post<UserResponse>(this.registerUrl, user).subscribe(
      () => {
        this.registrationSucces = true;
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 1000);
      },
      (e: HttpErrorResponse) => {
        const errorName = Object.keys(e.error.errors);
        const errorValue = Object.values(e.error.errors);
        this.requestErrorMessage = `${errorName} ${errorValue[0]}`;
        this.requestError = true;
        setTimeout(() => {
          this.requestErrorMessage = null;
          this.requestError = false;
        }, 1000);
      }
    );
  }

  login(user: LoginRegistrData): void {
    this.http.post<UserResponse>(this.loginURL, user).subscribe(
      (response) => {
        this.requestError = false;
        this.userData = response.user;
        this.isLogged = true;
        this.router.navigate(['/home']);
        this.header = new HttpHeaders({
          Authorization: `Token ${this.userData.token}`,
        });
      },
      (e: HttpErrorResponse) => {
        const errorName = Object.keys(e.error.errors);
        const errorValue = Object.values(e.error.errors);
        this.requestErrorMessage = `${errorName} ${errorValue}`;
        this.requestError = true;
      }
    );
  }
  getUser() {
    this.http
      .get<UserResponse>(this.getUserURL, {
        headers: this.header,
      })
      .subscribe(
        (response) => {
          this.currentUser = response.user;
        },
        (e: HttpErrorResponse) => {
          console.log(e.error.message);
        }
      );
  }
}
