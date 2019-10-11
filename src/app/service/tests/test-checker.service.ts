import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TaskBlock} from '../../common/tests/tests';

@Injectable({
    providedIn: 'root'
})
export class TestCheckerService {

    private isValidTest: BehaviorSubject<boolean>;
    public isValid: Observable<boolean>;

    constructor() {
        this.isValidTest = new BehaviorSubject(false);
        this.isValid = this.isValidTest.asObservable();
    }

    update(taskValidity: boolean) {
        const value = this.isValidTest.value && taskValidity;
        this.isValidTest.next(value);
    }
    
    private checkInput(task: TaskBlock) {
        return task.value;
    }
    
    private checkSelect(task: TaskBlock<Array<number>>) {
        return task.value.length === 1;
    }
    
    private checkMulti(task: TaskBlock<Array<number>>) {
        const answers = task.task.question.answers.filter(x => x.correct).length;
        return task.value .length === answers;
    }
}
