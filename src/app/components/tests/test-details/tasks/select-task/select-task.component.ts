import {Component, OnInit} from '@angular/core';
import {TestTask} from '../../../../../common/tests/tests';

@Component({
    selector: 'app-select-task',
    templateUrl: './select-task.component.html',
    styleUrls: ['./select-task.component.scss']
})
export class SelectTaskComponent implements OnInit {

    task: TestTask;

    constructor() {
    }

    ngOnInit() {
    }

}
