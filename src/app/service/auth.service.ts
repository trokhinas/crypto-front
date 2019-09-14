import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginRequest} from '../common/auth';
import {Urls} from '../enums/urls';
import {MyResponse} from '../common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuth = false;

  constructor(private http: HttpClient) { }

  authenticate(request: LoginRequest) {
    const url = Urls.AUTH;
    return this.http.post<MyResponse>(url, request);
  }

  fake(request: LoginRequest) {
    const url = Urls.FAKE_AUTH;
    return this.http.post<MyResponse>(url, request);
  }

  success() {
    this.isAuth = true;
  }

  error() {
    this.isAuth = false;
  }

  isAuthenticated() {
    return this.isAuth;
  }
}
