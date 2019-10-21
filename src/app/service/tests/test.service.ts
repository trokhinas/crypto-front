import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Urls} from '../../enums/urls';
import {MyResponse} from '../../common';
import {map} from 'rxjs/operators';
import {ResponseStatus} from '../../enums';
import {Test} from '../../common/tests/tests';

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
        private http: HttpClient) {
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
}
