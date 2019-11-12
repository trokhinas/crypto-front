import {Injectable} from '@angular/core';
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
            this.currentUser = data && data.user || null;
            this.currentRole = data && data.role || Roles.USER;
        });
    }

    user() {
        return this.currentUser;
    }

    role() {
        return this.currentRole;
    }
    
    isTeacher() {
        return this.currentRole === Roles.TEACHER;
    }
    
    isStudent() {
        return this.currentRole === Roles.USER;
    }
    
    isAdmin() {
        return this.currentRole === Roles.ADMIN;
    }
}
