import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TestTask} from '../../../../common/tests/tests';
import {Option} from '../../../../common/components/Option';
import {OptionService} from '../../../../service/tests/create/option.service';
import {TaskTypes} from '../../../../enums/tests';

@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
    @Input() tasks : Array<TestTask>;
    
    @Output('onTaskAdd') taskAdd = new EventEmitter<TestTask>();
    @Output('onTaskDelete') taskDelete = new EventEmitter<number>();
    taskOptions : Array<Option<TestTask>> = new Array<Option>();
    
    constructor(private optionService : OptionService) {
    }
    
    ngOnInit() {
        
        this.optionService.getTaskOptions().subscribe(
            data => {
                this.taskOptions = data;
                this.taskOptions.push({
                    value: undefined,
                    label: 'Новое задание'
                });
            },
            error1 => console.log(error1)
        );
    }
    
    deleteTask(deletedTaskNumber : number) {
        this.taskDelete.emit(deletedTaskNumber);
    }
    
    handleTaskSelect(taskOption : Option<TestTask>) {
        this.taskAdd.emit(taskOption.value);
    }
}
