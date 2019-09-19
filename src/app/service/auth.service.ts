import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthResponse, AuthResponseWrapper, LoginRequest, User} from '../common/auth';
import {Urls} from '../enums/urls';
import {ResponseStatus, Roles} from '../enums';

import {first, map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private isAuth = false;
  // TODO возможно стоит вынести эти данные в другой сервис
  private userKey = 'currentUser';
  private respMapper = (response: AuthResponseWrapper) => {
    if (response.status === ResponseStatus.OK) {
      localStorage.setItem(this.userKey, JSON.stringify(response.data));
    }
    return response;
  };

  constructor(private http: HttpClient) { }

  authenticate(request: LoginRequest) {
    const url = Urls.AUTH;
    return this.http.post<AuthResponseWrapper>(url, request)
      .pipe(map(this.respMapper));
  }

  fake() {
    const url = Urls.FAKE_AUTH;
    return this.http.post<AuthResponseWrapper>(url, {})
      .pipe(map(this.respMapper));
  }

  logout() {
    localStorage.removeItem(this.userKey);
  }

  isAuthenticated() {
    return localStorage.getItem(this.userKey);
  }

  user() {
    return this.getUserData().user;
  }

  role() {
    return this.getUserData().role;
  }

  private getUserData() {
    return JSON.parse(localStorage.getItem(this.userKey)) as AuthResponse;
  }

}
