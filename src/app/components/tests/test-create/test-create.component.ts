import {Component, OnInit} from '@angular/core';
import {Test, TestTask} from '../../../common/tests/tests';
import {TestService} from '../../../service/tests/test.service';
import {ResponseStatus} from '../../../enums';
import {PlatformLocation} from '@angular/common';
import {CreateCheckerService} from '../../../service/tests/create/create-checker.service';
import {TaskTypes} from '../../../enums/tests';
import {copyObject} from '../../../common/utils/utils';

@Component({
    selector: 'app-test-create',
    templateUrl: './test-create.component.html',
    styleUrls: ['./test-create.component.scss']
})
export class TestCreateComponent implements OnInit {
    test : Test;
    number : number;
    
    constructor(
        private testService : TestService,
        private location : PlatformLocation,
        private checker : CreateCheckerService) {
    }
    
    ngOnInit() {
        this.test = {
            testId: undefined,
            title: '',
            tasks: []
        };
        this.number = 1;
    }
    
    addTask(task : TestTask) {
        if (task == undefined) {
            this.test.tasks.push({
                taskId: undefined,
                type: TaskTypes.NOT_SELECTED,
                question: {
                    questionId: undefined,
                    text: `Новый вопрос ${this.number++}`,
                    answers: []
                }
            });
        } else if (task.taskId && this.test.tasks.indexOf(task) != -1) {
            alert('Невозможно добавить в тест два одинаковых задания!');
        } else {
            this.test.tasks.push(copyObject(task));
        }
    }
    
    deleteTask(deletedTaskNumber : number) {
        this.test.tasks = this.test.tasks.filter((task : TestTask, index : number) => index !== deletedTaskNumber);
    }
    
    save() {
        const status = this.checker.isValidCreatedTest(this.test);
        if (status.valid) {
            this.testService.createTest(this.test).subscribe(
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
        } else {
            alert(status.error);
        }
        
    }
}
