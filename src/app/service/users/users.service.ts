import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GlobalDataService} from '../global-data.service';
import {Urls} from '../../enums/urls';
import {MyResponse} from '../../common';
import {GridDataResponse} from '../../common/users';
import {map} from 'rxjs/operators';
import {ResponseStatus} from '../../enums';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    
    constructor(private http: HttpClient,
                private global: GlobalDataService) {
    }
    
    getUserData() {
        const url = this.global.isTeacher() ? Urls.USER_GRID_MARKS : Urls.USER_GRID_EDIT;
        return this.http.get<MyResponse<GridDataResponse>>(url)
            .pipe(map(response => {
                if (response.status == ResponseStatus.OK)
                    return response.data;
                alert(response.message);
            }));
    }
    
    deleteUser(id: number) {
        const url = 'api/user';
        return this.http.delete<MyResponse>(url, {
            params: new HttpParams().set("userId", id.toString())
        });
    }
}
