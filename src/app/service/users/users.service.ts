import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {GlobalDataService} from '../global-data.service';
import {Urls} from '../../enums/urls';
import {MyResponse} from '../../common';
import {GridData, GridDataResponse, InputKey} from '../../common/users';
import {map} from 'rxjs/operators';
import {ResponseStatus} from '../../enums';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    get createKeys() : Array<InputKey> {
        return this._createKeys;
    }
    get editKeys() : Array<InputKey> {
        return this._editKeys;
    }
    get editedUser() : GridData {
        return this._editedUser;
    }
    
    set editedUser(value : GridData) {
        this._editedUser = value;
    }
    
    private _editedUser: GridData;
    private _editKeys : Array<InputKey> = [
        {key: 'name', name: 'Имя'},
        {key: 'surname', name: 'Фамилия'},
        {key: 'login', name: 'Логин'},
        {key: 'roleId', name: 'Роль'},
    ];
    private _createKeys : Array<InputKey> = [
        {key: 'name', name: 'Имя'},
        {key: 'surname', name: 'Фамилия'},
        {key: 'login', name: 'Логин'},
        {key: 'roleId', name: 'Роль'},
        {key: 'password', name: 'Пароль'},
    ];
    
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
    
    saveUser(user: GridData) {
        const url = Urls.USER_SAVE;
        return this.http.post<MyResponse>(url, user)
            .pipe(map(response => {
                return response.status == ResponseStatus.OK ?
                    {isSuccess: true, message: ''} :
                    {isSuccess: false, message: response.message};
            }));
    }
}
