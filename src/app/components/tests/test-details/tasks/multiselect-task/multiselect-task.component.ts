import {Component, OnInit} from '@angular/core';
import {TestTask} from '../../../../../common/tests/tests';

@Component({
    selector: 'app-multiselect-task',
    templateUrl: './multiselect-task.component.html',
    styleUrls: ['./multiselect-task.component.scss']
})
export class MultiselectTaskComponent implements OnInit {

    task: TestTask;

    constructor() {
    }

    ngOnInit() {
    }

}
