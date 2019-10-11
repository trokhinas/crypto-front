import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Urls} from '../../enums/urls';
import {MyResponse} from '../../common';
import {map} from 'rxjs/operators';
import {ResponseStatus} from '../../enums';

@Injectable({
    providedIn: 'root'
})
export class TestService {

    private simpleMap = (resp: MyResponse) => {
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

    loadBlocks(testId: number) {
        const url = Urls.TEST_BLOCKS;
        const params = new HttpParams().set('testId', testId.toString());
        return this.http.get(url, {params: params})
            .pipe(map(this.simpleMap));
    }
}
