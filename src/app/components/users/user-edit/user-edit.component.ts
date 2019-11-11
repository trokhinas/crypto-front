import {Component, OnDestroy, OnInit} from '@angular/core';
import {UsersService} from '../../../service/users/users.service';
import {GridData, InputKey} from '../../../common/users';
import {PlatformLocation} from '@angular/common';
import {copyObject} from '../../../common/utils/utils';

@Component({
    selector: 'app-user-edit',
    templateUrl: './user-edit.component.html',
    styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit, OnDestroy {
    
    private createTitle = "Создание пользователя";
    private editTitle = "Редактирование пользователя";
    private isEdit: boolean;
    
    private user : GridData;
    private keys: Array<InputKey>;
    
    constructor(private userService: UsersService,
                private location: PlatformLocation) {
    }
    
    ngOnInit() {
        this.user =
            this.userService.editedUser &&
            copyObject(this.userService.editedUser) ||
            {};
        this.isEdit =
            this.userService.editedUser !== null &&
            this.userService.editedUser !== undefined;
        this.keys = this.isEdit ? this.userService.editKeys : this.userService.createKeys;
    }
    
    ngOnDestroy() {
        this.userService.editedUser = null;
    }
    
    getTitle() {
        return this.isEdit ? this.editTitle : this.createTitle;
    }
    
    getSubTitle() {
        return this.isEdit ? this.user['name'] : 'Новый пользователь';
    }
    
    save() {
        this.userService.saveUser(this.user).subscribe(resp => {
            if (resp.isSuccess)
                alert("Изменения сохранены");
            else alert(`${resp.message}`);
            
            this.location.back();
        })
    }
}
