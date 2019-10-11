import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TestService} from '../../../service/tests/test.service';
import {TaskBlock} from '../../../common/tests/tests';
import {fakeBlocks} from '../../../common/fakes';
import {TestCheckerService} from '../../../service/tests/test-checker.service';

@Component({
    selector: 'app-test-details',
    templateUrl: './test-details.component.html',
    styleUrls: ['./test-details.component.scss'],
    providers: [TestCheckerService]
})
export class TestDetailsComponent implements OnInit {

    id: number;
    title: string;
    blocks: TaskBlock[];

    constructor(
        private route: ActivatedRoute,
        private testService: TestService,
        private checker: TestCheckerService) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.title = this.route.snapshot.params.title;

        // this.testService.loadBlocks(this.id).subscribe(blocks => this.blocks = blocks);
        this.blocks = fakeBlocks;
    }
}
