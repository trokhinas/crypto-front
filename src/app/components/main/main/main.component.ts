import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {Router} from '@angular/router';
import {User} from '../../../common/auth';
import {Roles} from '../../../enums';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    user: User;
    role: Roles;
    
    constructor(
        private auth: AuthService,
        private router: Router) {
       

    }

    ngOnInit() {
        this.auth.currentUserData.subscribe(data => {
            this.user = data.user;
            this.role = data.role;
            if (this.user && this.role) {
                this.router.navigate(['profile']);
            }
        });
    }
    
    logout() {
      this.auth.logout();
      this.router.navigate(['login']);
    }
}
