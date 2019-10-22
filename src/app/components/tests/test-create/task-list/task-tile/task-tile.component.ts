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
    @Input() testNumber: number;
    
    @Output('onDeleteTask') deleteTaskEmitter = new EventEmitter<number>();
    
    taskTypeOptions : Array<Option<TaskTypes>>;
    questionOptions : Array<Option<Question>>;
    
    private questionMap : Map<TaskTypes, Array<Option<TaskTypes>>>;
    
    constructor(private optionsService: OptionService) {
    }
    
    ngOnInit() {
        this.taskTypeOptions = OptionService.getTaskTypeOptions();
        this.optionsService.getQuestionOptions().subscribe(
            data => {
                this.questionOptions = data;
                this.questionOptions.push({
                    label: 'Новый вопрос',
                    value: {
                        questionId: undefined,
                        text: '',
                        answers: []
                    }
                })
            },
            error1 => console.log(error1)
        );
        this.questionMap = new Map();
    }
    
    deleteTask() {
        this.deleteTaskEmitter.emit(this.testNumber);
    }
    
    isQuestionDisabled() {
        return this.task.question.questionId != undefined;
    }
    
    taskTypeToString(type: TaskTypes) {
        return OptionService.taskTypeToString(type);
    }
    
    changeQuestionOptionByType(value : TaskTypes) {
        if (this.questionMap[value]) {
            this.questionOptions = this.questionMap[value];
        } else {
            this.optionsService.getQuestionOptionsByType(value)
                .subscribe(options => {
                    this.questionOptions = options;
                    this.questionMap[value] = options;
            })
        }
    }
    
    isTypeSelected() {
        return this.task.type !== TaskTypes.NOT_SELECTED;
    }
    
    handleResetQuestion() {
        this.task.question = {
            questionId: undefined,
            text: '',
            answers:[]
        };
        this.task.type = TaskTypes.NOT_SELECTED;
    }
}
