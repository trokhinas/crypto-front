import {Component, OnInit} from '@angular/core';
import {TestLink} from '../../../common/tests';
import {fakeTestLinks} from '../../../common/fakes';
import {Router} from '@angular/router';

@Component({
    selector: 'app-test-list',
    templateUrl: './test-list.component.html',
    styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {

    tests: TestLink[];

    constructor(
        private router: Router) {
    }

    ngOnInit() {
        this.tests = fakeTestLinks;
    }

    redirectToTest(id: number) {
        this.router.navigate([`/main/tests/${id}`])
    }
}
