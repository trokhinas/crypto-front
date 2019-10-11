import {Component, Input, OnInit} from '@angular/core';
import {TaskBlock, TestTask} from '../../../../../common/tests/tests';
import {Validatable} from '../../../../../common/tests/validate';
import {TestCheckerService} from '../../../../../service/tests/test-checker.service';

@Component({
    selector: 'app-select-task',
    templateUrl: './select-task.component.html',
    styleUrls: ['./select-task.component.scss']
})
export class SelectTaskComponent implements OnInit, Validatable {

    @Input() block: TaskBlock<Array<number>>;
    task: TestTask;

    constructor(private checker: TestCheckerService) {
    }

    ngOnInit() {
        this.task = this.block.task;
        this.block.value = new Array<number>();
    }

    isValid() {
        return (this.block.value as Array<number>).length === 1;
    }

    validate(): void {
        const isBlockValid = this.isValid();
        this.checker.update(isBlockValid);
    }
    
    addAnswer(answerId: number) {
        if (this.block.value.indexOf(answerId) !== -1) {
            this.block.value = new Array<number>();
        }
        else {
            this.block.value.shift();
            this.block.value.push(answerId);
        }
    }
    
}
