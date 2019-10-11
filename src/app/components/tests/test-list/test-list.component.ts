import {Component, OnInit} from '@angular/core';
import {TestLink} from '../../../common/tests';
import {Router} from '@angular/router';
import {ProfileService} from '../../../service/profile/profile.service';

@Component({
    selector: 'app-test-list',
    templateUrl: './test-list.component.html',
    styleUrls: ['./test-list.component.scss']
})
export class TestListComponent implements OnInit {

    tests: TestLink[];

    constructor(
        private router: Router,
        private dataService: ProfileService) {
    }

    ngOnInit() {
        this.dataService.loadData().subscribe(data => this.tests = data);
    }

    redirectToTest(id: number, title: string) {
        this.router.navigate([`/main/tests/${id}`, {title: title}])
    }
}
