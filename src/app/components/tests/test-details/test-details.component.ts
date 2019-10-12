import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TestService} from '../../../service/tests/test.service';
import {TaskBlock, Test} from '../../../common/tests/tests';
import {TestCheckerService} from '../../../service/tests/test-checker.service';
import {TaskTypes} from '../../../enums/tests';

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

    constructor(
        private route: ActivatedRoute,
        private testService: TestService,
        private checker: TestCheckerService) {
    }

    ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.testService.loadTest(this.id).subscribe(
            test => {
                this.test = test;
                this.title = test.title;
                this.blocks = test.tasks.map<TaskBlock<any>>(task => {
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
}
