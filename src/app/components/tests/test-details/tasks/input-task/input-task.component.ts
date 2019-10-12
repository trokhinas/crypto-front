import {Component, Input, OnInit} from '@angular/core';
import {TaskBlock, TestTask} from '../../../../../common/tests/tests';

@Component({
    selector: 'app-input-task',
    templateUrl: './input-task.component.html',
    styleUrls: ['./input-task.component.scss']
})
export class InputTaskComponent implements OnInit {

    @Input() block: TaskBlock<string>;
    task: TestTask;

    constructor() {
    }

    ngOnInit() {
        this.task = this.block.task;
        this.block.value = '';
    }
}
