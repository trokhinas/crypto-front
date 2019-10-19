import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
    
    getTaskTypeOptions() {
        return [
            {
                label: 'Тип задания не задан',
                value: TaskTypes.NOT_SELECTED
            },
            {
                label: 'Задание с выбором ответа',
                value: TaskTypes.SELECT
            },
            {
                label: 'Задание с множественным выбором ответа',
                value: TaskTypes.MULTISELECT
            },
            {
                label: 'Задание с ручным вводом ответа',
                value: TaskTypes.MANUAL
            },
        ];
    }
}
