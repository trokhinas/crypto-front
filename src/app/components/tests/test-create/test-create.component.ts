import {Component, OnInit} from '@angular/core';
import {Test, TestTask} from '../../../common/tests/tests';

@Component({
    selector: 'app-test-create',
    templateUrl: './test-create.component.html',
    styleUrls: ['./test-create.component.scss']
})
export class TestCreateComponent implements OnInit {
    test: Test;
    number: number;
    
    constructor() {
    }
    
    ngOnInit() {
        this.test = {
            testId: undefined,
            title: '',
            tasks: []
        };
        this.number = 1;
    }
    
    addTask(task: TestTask) {
        this.test.tasks.push(task);
    }
    
    deleteTask(deletedTask : TestTask) {
        this.test.tasks = this.test.tasks.filter(task => task !== deletedTask);
    }
}
