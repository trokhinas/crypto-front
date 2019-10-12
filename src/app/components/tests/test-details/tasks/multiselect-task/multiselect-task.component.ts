import {Component, Input, OnInit} from '@angular/core';
import {TaskBlock, TestTask} from '../../../../../common/tests/tests';
@Component({
    selector: 'app-multiselect-task',
    templateUrl: './multiselect-task.component.html',
    styleUrls: ['./multiselect-task.component.scss']
})
export class MultiselectTaskComponent implements OnInit{

    @Input()block: TaskBlock<Array<number>>;
    task: TestTask;
    
    constructor() {
    }

    ngOnInit() {
        this.block.value = new Array<number>();
        this.task = this.block.task;
    }
    
    isChecked(answerId: number) {
        return this.block.value.indexOf(answerId) !== -1;
    }
    
    addAnswer(answerId: number) {
        //если ответ уже есть, то отключаем его
        if (this.block.value.indexOf(answerId) !== -1) {
            this.block.value = this.block.value.filter(x => x !== answerId);
        }
        //если нет, то добавляем новый
        else {
            //и в любом случае добавляем новый
            this.block.value.push(answerId);
        }
    }
    
}
