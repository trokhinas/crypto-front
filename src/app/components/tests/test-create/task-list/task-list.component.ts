import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TestTask} from '../../../../common/tests/tests';
import {Option} from '../../../../common/components/Option';
import {OptionService} from '../../../../service/tests/create/option.service';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
    @Input() tasks: Array<TestTask>;
    
    @Output('onTaskAdd') taskAdd = new EventEmitter();
    @Output('onTaskDelete') taskDelete = new EventEmitter<TestTask>();
    taskOptions: Array<Option>;
    
    constructor(private optionService: OptionService) {
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
