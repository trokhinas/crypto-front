import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TestTask} from '../../../../../common/tests/tests';

@Component({
    selector: 'app-task-tile',
    templateUrl: './task-tile.component.html',
    styleUrls: ['./task-tile.component.scss']
})
export class TaskTileComponent implements OnInit {
    @Input() task: TestTask;
    @Output('onDeleteTask') deleteTaskEmitter = new EventEmitter<TestTask>();
    
    constructor() {
    }
    
    ngOnInit() {
    }
    
    deleteTask() {
        this.deleteTaskEmitter.emit(this.task);
    }
}
