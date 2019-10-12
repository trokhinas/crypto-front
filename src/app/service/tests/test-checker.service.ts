import {Injectable} from '@angular/core';
import {TaskBlock} from '../../common/tests/tests';
import {TaskTypes} from '../../enums/tests';

@Injectable({
    providedIn: 'root'
})
export class TestCheckerService {

    constructor() {
    }
    
    check(blocks: Array<TaskBlock>) {
        return blocks.map(block => this.checkTask(block))
            .every(isValid => isValid == true);
    }
    
    private checkTask(task: TaskBlock) {
        switch (task.task.type) {
            case TaskTypes.SELECT: return this.checkSelect(task);
            case TaskTypes.MANUAL: return this.checkInput(task);
            case TaskTypes.MULTISELECT: return this.checkMulti(task);
        }
    }
    
    private checkInput(task: TaskBlock<string>) {
        return task.value && task.value.length !== 0;
    }
    
    private checkSelect(task: TaskBlock<Array<number>>) {
        return task.value.length === 1;
    }
    
    private checkMulti(task: TaskBlock<Array<number>>) {
        return task.value.length >= 1;
    }
}
