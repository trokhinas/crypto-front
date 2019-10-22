import {Injectable} from '@angular/core';
import {Test, TestTask} from '../../../common/tests/tests';
import {ValidationStatus} from '../../../common/tests/create';
import {TaskTypes} from '../../../enums/tests';

@Injectable({
    providedIn: 'root'
})
export class CreateCheckerService {
    
    constructor() {
    }
    
    isValidCreatedTest(createdTest : Test) : ValidationStatus {
        let status : ValidationStatus = {
            valid: true,
            error: ''
        };
        
        if (createdTest.title == '') {
            status.error = 'Не заполнен заголовок теста!';
            status.valid = false;
            return status;
        }
        
        let messages = new Array<string>();
        let notValidNumbers = new Array<number>();
        createdTest.tasks.forEach((task : TestTask, index : number) => {
            if (task.taskId || task.question.questionId) {
                return;
            }
            
            const number = index + 1;
            const message = this.checkTask(task, number);
            if (message === '')
                return;
            messages.push(message);
            notValidNumbers.push(number);
        });
        
        if (messages.length !== 0) {
            status.valid = false;
            status.error = messages.join("\n");
            status.notValidNumber = notValidNumbers;
        }
        
        return status;
    }
    
    private checkTask(task : TestTask, num : number) {
        function checkManual(task : TestTask, num : number) {
            const question = task.question;
            if (question.answers.length !== 1) {
                return `В задании ${num} допущена ошибка. Ручной ввод предполагает наличие только одного ответа!.`;
            } else if (question.answers.length === 1) {
                const answer = question.answers[0];
                if (answer.text == '' || !answer.correct) {
                    return `В задании ${num} допущена ошибка. Ответ на вопрос не заполнен или не отмечен как правильный!!.`;
                }
                return '';
            }
            
        }
        
        function checkSelect(task : TestTask, num : number) {
            const question = task.question;
            if (question.answers.length === 1) {
                return `В задании ${num} допущена ошибка. Задание с выбором ответа предполагает наличие нескольких вариантов ответа!.`;
            } else if (question.answers.length !== 1) {
                const validAnswers = question.answers.filter(answer => answer.text && answer.text !== '');
                if (validAnswers.length !== question.answers.length) {
                    return `В задании ${num} допущена ошибка. Не все ответы заполненны корректно.`;
                }
                
                const correctAnswers = question.answers.filter(answer => answer.correct);
                if (correctAnswers.length !== 1) {
                    return `В задании ${num} допущена ошибка. Задание с выбором ответа предполагает наличие одного и только одного верного ответа!`;
                }
                return '';
            }
            
        }
        
        function checkMulti(task : TestTask, num : number) {
            const question = task.question;
            if (question.answers.length === 1) {
                return `В задании ${num} допущена ошибка. Задание с выбором ответов предполагает наличие нескольких вариантов ответа!.`;
            } else if (question.answers.length !== 1) {
                const validAnswers = question.answers.filter(answer => answer.text && answer.text !== '');
                if (validAnswers.length !== question.answers.length) {
                    return `В задании ${num} допущена ошибка. Не все ответы заполненны корректно.`;
                }
                
                const correctAnswers = question.answers.filter(answer => answer.correct);
                if (correctAnswers.length === 0) {
                    return `В задании ${num} допущена ошибка. В задании отсутсвуют правильные ответы!`;
                }
                return '';
            }
        }
        
        switch (task.type) {
            case TaskTypes.NOT_SELECTED:
                return `В задании ${num} не заполнен тип вопроса`;
            case TaskTypes.MANUAL:
                return checkManual(task, num);
            case TaskTypes.SELECT:
                return checkSelect(task, num);
            case TaskTypes.MULTISELECT:
                return checkMulti(task, num);
        }
    }
}
