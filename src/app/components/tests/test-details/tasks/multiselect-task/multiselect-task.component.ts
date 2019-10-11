import {Component, Input, OnInit} from '@angular/core';
import {TaskBlock, TestTask} from '../../../../../common/tests/tests';
import {Validatable} from '../../../../../common/tests/validate';
import {TestCheckerService} from '../../../../../service/tests/test-checker.service';
import {BehaviorSubject} from 'rxjs';

@Component({
    selector: 'app-multiselect-task',
    templateUrl: './multiselect-task.component.html',
    styleUrls: ['./multiselect-task.component.scss']
})
export class MultiselectTaskComponent implements OnInit, Validatable {

    @Input()block: TaskBlock<Array<number>>;
    task: TestTask;
    correctsCount: number;
    
    answers: Array<number>;
    blockValue: BehaviorSubject<Array<number>>;
    
    constructor(private checker: TestCheckerService) {
    }

    ngOnInit() {
        this.block.value = new Array<number>();
        this.answers = this.block.value;
        
        this.task = this.block.task;
        this.blockValue = new BehaviorSubject(this.block.value);
        this.correctsCount = this.task.question.answers.filter(x => x.correct).length;
    }

    isValid(): boolean {
        return this.block.value.length === this.correctsCount;
    }

    validate(): void {
        const isBlockValid = this.isValid();
        this.checker.update(isBlockValid);
    }
    
    isChecked(answerId: number) {
        return this.answers.indexOf(answerId) !== -1;
    }
    
    addAnswer(answerId: number) {
        //если ответ уже есть, то отключаем его
        if (this.answers.indexOf(answerId) !== -1) {
            this.answers = this.answers.filter(x => x !== answerId);
            return;
        }
        //если нет, то проверяем набрали ли мы максимальное число ответов
        if (this.answers.length === this.correctsCount) {
            //если да, то убираем первый из них
            this.answers.shift();
        }
        //и в любом случае добавляем новый
        this.answers.push(answerId);
        
        this.block.value = this.answers;
    }
    
}
