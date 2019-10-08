import {Component, Input, OnInit} from '@angular/core';
import {Roles} from '../../../enums';
import {User} from '../../../common/auth';
import {TestLink} from '../../../common/tests';
import {fakeTestLinks} from '../../../common/fakes';
import {Router} from '@angular/router';

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
        private router: Router) {
    }

    ngOnInit() {
        this.testLinks = fakeTestLinks;
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
