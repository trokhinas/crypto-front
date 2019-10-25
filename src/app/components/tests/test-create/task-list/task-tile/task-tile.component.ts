import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Answer, Question, TestTask} from '../../../../../common/tests/tests';
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
    answerNumber : number;
    
    private questionMap : Map<TaskTypes, Array<Option<TaskTypes>>>;
    
    constructor(private optionsService: OptionService) {
    }
    
    ngOnInit() {
        this.answerNumber = 1;
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
        const task = this.task;
        return task.question && task.question.questionId;
    }
    
    taskTypeToString(type: TaskTypes) {
        return OptionService.taskTypeToString(type);
    }
    
    changeTaskType() {
        this.task.question.answers = [];
    }
    
    handleAddAnswer() {
        const answer : Answer = {
            answerId: undefined,
            correct: this.task.type == TaskTypes.MANUAL,
            text: `Ответ ${this.answerNumber++}`
        };
        this.task.question.answers.push(answer);
    }
    
    handleDeleteAnswer(deletedIndex : number) {
        this.task.question.answers = this.task.question.answers.filter((answer, index) => index !== deletedIndex);
    }
}
