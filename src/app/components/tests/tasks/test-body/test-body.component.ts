import {Component, Input, OnInit} from '@angular/core';
import {TaskBlock} from '../../../../common/tests/tests';
import {TaskTypes} from '../../../../enums/tests';

@Component({
    selector: 'app-test-body',
    templateUrl: './test-body.component.html',
    styleUrls: ['./test-body.component.scss']
})
export class TestBodyComponent implements OnInit {
    @Input() blocks: TaskBlock[];

    input = TaskTypes.MANUAL;
    select = TaskTypes.SELECT;
    multi = TaskTypes.MULTISELECT;

    constructor() {
    }

    ngOnInit() {
    }
}

