import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthResponse, AuthResponseWrapper, LoginRequest, User} from '../common/auth';
import {Urls} from '../enums/urls';
import {Roles} from '../enums';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuth = false;
  // TODO возможно стоит вынести эти данные в другой сервис
  private currentUser: User;
  private userRole: Roles;

  constructor(private http: HttpClient) { }

  authenticate(request: LoginRequest) {
    const url = Urls.AUTH;
    return this.http.post<AuthResponseWrapper>(url, request);
  }

  fake() {
    const url = Urls.FAKE_AUTH;
    return this.http.post<AuthResponseWrapper>(url, {});
  }

  success(response: AuthResponse) {
    this.isAuth = true;
    this.currentUser = response.user;
    this.userRole = response.role;
  }

  logout() {
    this.isAuth = false;
    this.currentUser = {} as User;
    this.userRole = {} as Roles;
  }

  isAuthenticated() {
    return this.isAuth;
  }

  user() {
    return this.currentUser;
  }

  role() {
    return this.userRole;
  }
}
