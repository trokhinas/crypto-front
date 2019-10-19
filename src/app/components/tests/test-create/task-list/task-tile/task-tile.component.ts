import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question, TestTask} from '../../../../../common/tests/tests';
import {Option} from '../../../../../common/components/Option';
import {TaskTypes} from '../../../../../enums/tests';
import {OptionService} from '../../../../../service/tests/create/option.service';

@Component({
    selector: 'app-task-tile',
    templateUrl: './task-tile.component.html',
    styleUrls: ['./task-tile.component.scss']
})
export class TaskTileComponent implements OnInit {
    @Input() task: TestTask;
    @Input() disabled: boolean;
    @Output('onDeleteTask') deleteTaskEmitter = new EventEmitter<TestTask>();
    taskTypeOptions : Array<Option<TaskTypes>>;
    questionOption : Array<Option<Question>>;
    
    constructor(private optionsService: OptionService) {
    }
    
    ngOnInit() {
        this.taskTypeOptions = this.optionsService.getTaskTypeOptions();
    }
    
    deleteTask() {
        this.deleteTaskEmitter.emit(this.task);
    }
    
    isDisabled() {
        return this.task.taskId != undefined;
    }
    
    handleSelect(taskType : Option<TaskTypes>) {
        this.task.type = taskType.value;
    }
}
