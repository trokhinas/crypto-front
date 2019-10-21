import {Component, OnInit} from '@angular/core';
import {Test, TestTask} from '../../../common/tests/tests';
import {TestService} from '../../../service/tests/test.service';
import {ResponseStatus} from '../../../enums';
import {PlatformLocation} from '@angular/common';

@Component({
    selector: 'app-test-create',
    templateUrl: './test-create.component.html',
    styleUrls: ['./test-create.component.scss']
})
export class TestCreateComponent implements OnInit {
    test: Test;
    number: number;
    
    constructor(
        private testService: TestService,
        private location: PlatformLocation) {
    }
    
    ngOnInit() {
        this.test = {
            testId: undefined,
            title: '',
            tasks: []
        };
        this.number = 1;
    }
    
    addTask(task: TestTask) {
        this.test.tasks.push(task);
    }
    
    deleteTask(deletedTask : TestTask) {
        this.test.tasks = this.test.tasks.filter(task => task !== deletedTask);
    }
    
    save() {
        return this.testService.createTest(this.test).subscribe(
            response => {
                if (response.status == ResponseStatus.OK) {
                    alert('Тест успешно создани');
                    this.location.back();
                } else {
                    alert(`Произошла ошибка: ${response.message}`);
                    this.location.back();
                }
            }
        );
    }
}
