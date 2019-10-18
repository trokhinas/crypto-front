import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Urls} from '../../../enums/urls';
import {MyResponse} from '../../../common';
import {catchError, map} from 'rxjs/operators';
import {ResponseStatus} from '../../../enums';

@Injectable({
    providedIn: 'root'
})
export class OptionService {

    constructor(private http: HttpClient) {
    }
    
    getTaskOptions() {
        const url = Urls.TASK_OPTIONS;
        return this.http.get<MyResponse>(url)
            .pipe(map(response => {
                if (response.status == ResponseStatus.OK)
                    return response.data;
                else alert(response.message);
            }));
    }
}
