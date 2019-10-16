import {Component, Input, OnInit} from '@angular/core';
import {TestLink} from '../../../../common/tests';
import {Router} from '@angular/router';

@Component({
    selector: 'app-test-row',
    templateUrl: './test-row.component.html',
    styleUrls: ['./test-row.component.scss']
})
export class TestRowComponent implements OnInit {
    @Input()isTestFocused : boolean;
    @Input()test: TestLink;
    
    constructor(private router: Router) {
    }
    
    ngOnInit() {
    }
    
    redirectToTest(id: number, title: string) {
        this.router.navigate([`/main/tests/${id}`, {title: title}])
    }
    
    editTest(test : TestLink) {
        console.log(`click edit test ${test}`);
    }
}
