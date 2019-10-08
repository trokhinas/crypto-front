import {Component, OnInit} from '@angular/core';
import {User} from '../../common/auth';
import {Roles} from '../../enums';
import {AuthService} from '../../service/auth.service';
import {TestLink} from '../../common/tests';
import {fakeTestLinks} from '../../common/fakes';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
    user: User;
    role: Roles;

    constructor(private auth: AuthService) { }
    
    ngOnInit() {
        this.auth.currentUserData.subscribe(data => {
            this.user = data.user;
            this.role = data.role;
        });
    }

}
