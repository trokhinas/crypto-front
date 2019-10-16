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
    focusTestId: number;

    constructor(
        private router: Router,
        private dataService: ProfileService) {
    }

    ngOnInit() {
        this.dataService.loadData().subscribe(data => this.tests = data);
    }
    
    addTest() {
        console.log(`click add test`);
        this.router.navigate(['/main/tests/create']);
    }
    
    isTestFocused(test : TestLink) {
        return test.id === this.focusTestId;
    }
    
    setFocus(id : number) {
        this.focusTestId = id;
    }
    
    clearFocus() {
        this.focusTestId = -1;
    }
}
