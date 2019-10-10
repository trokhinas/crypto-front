import {Injectable} from '@angular/core';
import {GlobalDataService} from '../global-data.service';
import {ResponseStatus, Roles} from '../../enums';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Urls} from '../../enums/urls';
import {map} from 'rxjs/operators';
import {MyResponse} from '../../common';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    constructor(
        private globalData: GlobalDataService,
        private http: HttpClient) {
    }

    loadData() {
        if (this.globalData.role() !== Roles.USER) {
            return;
        }
        const url = Urls.PROFILE_DATA;
        const userId = this.globalData.user().id.toString();
        const params = new HttpParams().set('userId', userId);
        return this.http.get<MyResponse>(url, {params: params})
            .pipe(map( response => {
                    if (response.status === ResponseStatus.OK) {
                        return response.data;
                    } else {
                        alert(response.message);
                    }
                }
            ));
    }
}
