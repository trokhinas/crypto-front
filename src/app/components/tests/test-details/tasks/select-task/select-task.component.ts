import {Component, Input, OnInit} from '@angular/core';
import {TaskBlock, TestTask} from '../../../../../common/tests/tests';

@Component({
    selector: 'app-select-task',
    templateUrl: './select-task.component.html',
    styleUrls: ['./select-task.component.scss']
})
export class SelectTaskComponent implements OnInit {

    @Input() block: TaskBlock<Array<number>>;
    task: TestTask;

    constructor() {
    }

    ngOnInit() {
        this.task = this.block.task;
        this.block.value = new Array<number>();
    }
    
    addAnswer(answerId: number) {
        if (this.block.value.indexOf(answerId) !== -1) {
            this.block.value = new Array<number>();
        }
        else {
            this.block.value.shift();
            this.block.value.push(answerId);
        }
    }
    
    isChecked(answerId: number) {
        return this.block.value.indexOf(answerId) !== -1;
    }
}
