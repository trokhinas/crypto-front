import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Urls} from '../../enums/urls';
import {MyResponse} from '../../common';
import {map} from 'rxjs/operators';
import {ResponseStatus} from '../../enums';
import {TaskBlock, Test} from '../../common/tests/tests';
import {GlobalDataService} from '../global-data.service';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    private simpleMap = (resp: MyResponse<Test>) => {
        if (resp.status === ResponseStatus.OK)
            return resp.data;
        alert(resp.message);
    };

    constructor(
        private http: HttpClient,
        private global: GlobalDataService) {
    }

    getAll() {
        const url = Urls.ALL_TESTS;
        return this.http.get<MyResponse>(url)
            .pipe(map(this.simpleMap));
    }

    loadTest(testId: number) {
        const url = Urls.TEST_BLOCKS;
        const params = new HttpParams().set('id', testId.toString());
        return this.http.get<MyResponse<Test>>(url, {params: params})
            .pipe(map(this.simpleMap));
    }
    
    createTest(test: Test) {
        const url = Urls.TEST_CREATE;
        return this.http.post<MyResponse>(url, test);
    }
    
    submitTestToCheck(testId: number, taskAnswerList: Array<TaskBlock>) {
        const url = Urls.CHECK_TEST;
        const params = new HttpParams()
            .set("testId", testId.toString())
            .set("userId", this.global.user().id.toString());
        return this.http.post<MyResponse<{mark}>>(url, taskAnswerList, {params: params})
            .pipe(map(response => {
                if (response.status == ResponseStatus.OK) {
                    return response.data;
                } else {
                    alert(response.message);
                }
            }))
    }
}
