import {Component, Input, OnInit} from '@angular/core';
import {Roles} from '../../../enums';
import {User} from '../../../common/auth';
import {TestLink} from '../../../common/tests';
import {Router} from '@angular/router';
import {ProfileService} from '../../../service/profile/profile.service';

@Component({
    selector: 'app-profile-data',
    templateUrl: './profile-data.component.html',
    styleUrls: ['./profile-data.component.scss']
})
export class ProfileDataComponent implements OnInit {
    @Input() user: User;
    @Input() role: Roles;

    testLinks: Array<TestLink>;

    constructor(
        private router: Router,
        private dataService: ProfileService) {
    }

    ngOnInit() {
        this.dataService.loadData().subscribe(data => this.testLinks = data);
    }

    isStudent() {
        return this.role === Roles.USER;
    }

    isTeacher() {
        return this.role === Roles.TEACHER;
    }

    redirectToTest(testId: number) {
        this.router.navigate([`main/tests/${testId}`]);
    }
}
