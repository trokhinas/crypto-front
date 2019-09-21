import { Injectable } from '@angular/core';
import {User} from '../common/auth';
import {Roles} from '../enums';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GlobalDataService {
  private currentUser: User;
  private currentRole: Roles;

  constructor(
    private auth: AuthService) {

    this.auth.currentUserData.subscribe(data => {
      this.currentUser = data.user;
      this.currentRole = data.role;
    });
  }

  user() {
    return this.currentUser;
  }

  role() {
    return this.currentRole;
  }
}
