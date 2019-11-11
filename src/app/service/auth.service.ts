import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthResponse, AuthResponseWrapper, LoginRequest, GridData} from '../common/auth';
import {Urls} from '../enums/urls';
import {ResponseStatus, Roles} from '../enums';

import {first, map} from 'rxjs/operators';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
    // TODO возможно стоит вынести эти данные в другой сервис
    private userKey = 'currentUser';
    private currentUserDataSubject: BehaviorSubject<AuthResponse>;
    public currentUserData: Observable<AuthResponse>;
  
    private setToStorage = (response: AuthResponseWrapper) => {
      if (response.status === ResponseStatus.OK) {
        localStorage.setItem(this.userKey, JSON.stringify(response.data));
        this.currentUserDataSubject.next(response.data);
      }
      return response;
    };
  
    constructor(private http: HttpClient) {
      this.currentUserDataSubject = new BehaviorSubject<AuthResponse>(JSON.parse(localStorage.getItem(this.userKey)));
      this.currentUserData = this.currentUserDataSubject.asObservable();
    }
  
    login(request: LoginRequest) {
      const url = Urls.AUTH;
      return this.http.post<AuthResponseWrapper>(url, request)
        .pipe(map(this.setToStorage));
    }
  
    fake() {
      const url = Urls.FAKE_AUTH;
      return this.http.post<AuthResponseWrapper>(url, {})
        .pipe(map(this.setToStorage));
    }
  
    logout() {
      localStorage.removeItem(this.userKey);
      this.currentUserDataSubject.next(null);
    }

}
