import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TaskTypes} from '../../../../../../enums/tests';
import {Answer} from '../../../../../../common/tests/tests';

@Component({
    selector: 'app-answers-list',
    templateUrl: './answers-list.component.html',
    styleUrls: ['./answers-list.component.scss']
})
export class AnswersListComponent implements OnInit {
    @Input() type: TaskTypes;
    @Input() answers: Array<Answer>;
    @Input() disabled: boolean;
    
    @Output('onAddAnswer') addAnswerEmitter = new EventEmitter();
    @Output('onDeleteAnswer') deleteAnswerEmitter = new EventEmitter<number>();
    
    select = TaskTypes.SELECT;
    manual = TaskTypes.MANUAL;
    multi = TaskTypes.MULTISELECT;
    
    constructor() {
    }
    
    ngOnInit() {
    }
    
    addAnswer() {
        this.addAnswerEmitter.emit();
    }
    
    deleteAnswer(answerIndex : number) {
        this.deleteAnswerEmitter.emit(answerIndex);
    }
    
    typeIsNotSelected() {
        return this.type === TaskTypes.NOT_SELECTED;
    }
    
    disabledByType() {
        switch (this.type) {
            case TaskTypes.MANUAL: {
                return this.answers.length == 1;
            }
            case TaskTypes.MULTISELECT: case TaskTypes.SELECT: {
                return this.answers.length == 3;
            }
        }
    }
}
