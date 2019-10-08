import {Component, OnInit} from '@angular/core';
import {TestTask} from '../../../../../common/tests/tests';

@Component({
    selector: 'app-input-task',
    templateUrl: './input-task.component.html',
    styleUrls: ['./input-task.component.scss']
})
export class InputTaskComponent implements OnInit {

    task: TestTask;

    constructor() {
    }

    ngOnInit() {
    }

}
