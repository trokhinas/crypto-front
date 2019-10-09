import {Component, Input, OnInit} from '@angular/core';
import {TaskBlock, TestTask} from '../../../../../common/tests/tests';

@Component({
    selector: 'app-select-task',
    templateUrl: './select-task.component.html',
    styleUrls: ['./select-task.component.scss']
})
export class SelectTaskComponent implements OnInit {

    @Input() block: TaskBlock;
    task: TestTask;

    constructor() {
    }

    ngOnInit() {
        this.task = this.block.task;
    }

}
