import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TestService} from '../../../service/tests/test.service';
import {TaskBlock, Test} from '../../../common/tests/tests';
import {TestCheckerService} from '../../../service/tests/test-checker.service';
import {TaskTypes} from '../../../enums/tests';
import {ProfileService} from '../../../service/profile/profile.service';
import {TestLink} from '../../../common/tests';

@Component({
    selector: 'app-test-details',
    templateUrl: './test-details.component.html',
    styleUrls: ['./test-details.component.scss'],
    providers: [TestCheckerService]
})
export class TestDetailsComponent implements OnInit {

    id: number;
    title: string;
    blocks: TaskBlock<string | Array<number>>[];
    test: Test;
    passedTest: TestLink;

    constructor(
        private route: ActivatedRoute,
        private testService: TestService,
        private checker: TestCheckerService,
        private profileService: ProfileService) {
    }

    ngOnInit() {
        this.profileService.loadData().subscribe(data => {
            this.id = this.route.snapshot.params.id;
            const test = data.filter(test => test.id === this.id)[0];
            if (test && test.mark !== 'N/A') {
                this.passedTest = test;
            } else {
                this.testService.loadTest(this.id).subscribe(
                    test => {
                        this.test = test;
                        this.title = test.title;
                        this.blocks = test.tasks.map<TaskBlock<string | Array<number>>>(task => {
                            return {
                                task: task,
                                value: task.type === TaskTypes.MANUAL ?
                                    '' :
                                    new Array<number>()
                            }
                        });
                    }
                );
            }
        });
    }
    
    
    submit() {
        const isValid = this.checker.check(this.blocks);
        if (!isValid) {
            alert('Не все задания выполнены!');
        } else {
            alert('Все ок!');
        }
    }
    
    clear() {
        this.blocks.forEach(block => {
            if (block.task.type === TaskTypes.MANUAL) {
                block.value = '';
            } else {
                block.value = new Array<number>()
            }
        })
    }
    
    isPassed() {
        return this.passedTest;
    }
    
    getMark() {
        return this.passedTest && this.passedTest.mark || 'N/A';
    }
}
