import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Urls} from '../../../enums/urls';
import {MyResponse} from '../../../common';
import {map} from 'rxjs/operators';
import {ResponseStatus} from '../../../enums';
import {TaskTypes} from '../../../enums/tests';

@Injectable({
    providedIn: 'root'
})
export class OptionService {
    
    constructor(private http : HttpClient) {
    }
    
    getTaskOptions() {
        const url = Urls.TASK_OPTIONS;
        return this.http.get<MyResponse>(url)
            .pipe(map(response => {
                if (response.status == ResponseStatus.OK) {
                    return response.data;
                } else {
                    alert(response.message);
                }
            }));
    }
    
    getQuestionOptions() {
        const url = Urls.QUESTION_OPTIONS;
        return this.http.get<MyResponse>(url)
            .pipe(map(response => {
                if (response.status == ResponseStatus.OK) {
                    return response.data;
                } else {
                    alert(response.message);
                }
            }));
    }
    
    getQuestionOptionsByType(type: TaskTypes) {
        const url = Urls.QUESTION_OPTIONS;
        const params = new HttpParams().set('taskType', type);
        return this.http.get<MyResponse>(url, {params: params})
            .pipe(map(response => {
                if (response.status == ResponseStatus.OK) {
                    return response.data;
                } else {
                    alert(response.message);
                }
            }));
    }
    
    static getTaskTypeOptions() {
        return [
            {
                label: OptionService.taskTypeToString(TaskTypes.NOT_SELECTED),
                value: TaskTypes.NOT_SELECTED
            },
            {
                label: OptionService.taskTypeToString(TaskTypes.SELECT),
                value: TaskTypes.SELECT
            },
            {
                label: OptionService.taskTypeToString(TaskTypes.MULTISELECT),
                value: TaskTypes.MULTISELECT
            },
            {
                label: OptionService.taskTypeToString(TaskTypes.MANUAL),
                value: TaskTypes.MANUAL
            },
        ];
    }
    
    static taskTypeToString(type: TaskTypes) {
        switch (type) {
            case TaskTypes.NOT_SELECTED: return 'Тип задания не выбран';
            case TaskTypes.SELECT: return 'Задание с выбором ответа';
            case TaskTypes.MULTISELECT: return 'Задание с множественным выбором ответа';
            case TaskTypes.MANUAL: return 'Задание с ручным вводом ответа';
        }
    }
}
