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
    private user: User;
    private role: Roles;
    
    constructor(
        private auth: AuthService,
        private router: Router) {
       
        this.auth.currentUserData.subscribe(data => {
            this.user = data.user;
            this.role = data.role;
        });
    }

    ngOnInit() {
    }
    
    logout() {
      this.auth.logout();
      this.router.navigate(['login']);
    }
}
