import {Component, Input, OnInit} from '@angular/core';
import {TaskBlock, TestTask} from '../../../../../common/tests/tests';
import {TestCheckerService} from '../../../../../service/tests/test-checker.service';
import {Validatable} from '../../../../../common/tests/validate';

@Component({
    selector: 'app-input-task',
    templateUrl: './input-task.component.html',
    styleUrls: ['./input-task.component.scss']
})
export class InputTaskComponent implements OnInit, Validatable {

    @Input() block: TaskBlock;
    task: TestTask;

    constructor(private checker: TestCheckerService) {
    }

    ngOnInit() {
        this.task = this.block.task;
        this.block.value = '';
    }

    isValid() {
        return this.block.value;
    }

    validate() {
        const isBlockValid = this.isValid();
        this.checker.update(isBlockValid);
    }
}
