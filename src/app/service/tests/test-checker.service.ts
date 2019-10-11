import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

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
}
