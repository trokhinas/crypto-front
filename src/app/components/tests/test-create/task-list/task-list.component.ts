import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TestTask} from '../../../../common/tests/tests';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
    @Input() tasks: Array<TestTask>;
    
    @Output('onTaskAdd') taskAdd = new EventEmitter();
    @Output('onTaskDelete') taskDelete = new EventEmitter<TestTask>();
    
    constructor() {
    }
    
    ngOnInit() {
    }
    
    addTask() {
        this.taskAdd.emit();
    }
    
    deleteTask(deletedTask : TestTask) {
        this.taskDelete.emit(deletedTask);
    }
}
