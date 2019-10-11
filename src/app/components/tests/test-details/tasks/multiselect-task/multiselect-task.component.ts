import {Component, Input, OnInit} from '@angular/core';
import {TaskBlock, TestTask} from '../../../../../common/tests/tests';
import {Validatable} from '../../../../../common/tests/validate';
import {TestCheckerService} from '../../../../../service/tests/test-checker.service';

@Component({
    selector: 'app-multiselect-task',
    templateUrl: './multiselect-task.component.html',
    styleUrls: ['./multiselect-task.component.scss']
})
export class MultiselectTaskComponent implements OnInit, Validatable {

    @Input()block: TaskBlock;
    task: TestTask;
    correctsCount: number;

    constructor(private checker: TestCheckerService) {
    }

    ngOnInit() {
        this.task = this.block.task;
        this.correctsCount = this.task.question.answers.filter(x => x.correct).length;
    }

    isValid(): boolean {
        return (this.block.value as Array<number>).length === this.correctsCount;
    }

    validate(): void {
        const isBlockValid = this.isValid();
        this.checker.update(isBlockValid);
    }

}
