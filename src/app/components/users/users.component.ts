import {Component, OnInit, ViewChild} from '@angular/core';
import {GridColumn, GridData} from '../../common/users';
import {UsersService} from '../../service/users/users.service';
import {GridColumnType} from '../../enums/columns';
import {ResponseStatus} from '../../enums';
import {Router, RouterOutlet} from '@angular/router';
import {PlatformLocation} from '@angular/common';
import {GlobalDataService} from '../../service/global-data.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    @ViewChild('myOutlet') routerOutlet : RouterOutlet;
    columns: Array<GridColumn>;
    data: Array<GridData>;
    displayedColumns : Array<String>;
    isEditVisible: boolean;
    
    constructor(private usersService: UsersService,
                private router: Router,
                private location: PlatformLocation,
                private global: GlobalDataService) {
    }
    
    ngOnInit() {
        this.location.onPopState(() => {
            this.initData();
            this.isEditVisible = this.routerOutlet.isActivated;
        });
        this.initData();
        this.isEditVisible = this.routerOutlet.isActivated;
    }
    
    initData() {
        this.usersService.getUserData().subscribe(data => {
            this.columns = data.columns;
            this.data = data.data;
        
            this.displayedColumns = this.columns.map(x => x.key);
        });
    }
    
    isDefaultColumn(column : GridColumn) {
        return column.type == GridColumnType.DEFAULT;
    }
    
    isDeleteEditColumn(column : GridColumn) {
        return column.type == GridColumnType.DELETE_EDIT;
    }
    
    editUser(row : GridData) {
        this.usersService.editedUser = row;
        this.router.navigate(['/main/users/edit']);
    }
    
    deleteUser(row : GridData) {
        this.usersService.deleteUser(row['id']).subscribe(resp => {
            if (resp.status == ResponseStatus.OK) {
                alert('Пользователь удален');
            } else {
                alert(resp.message);
            }
            this.initData();
        });
    }
    
    routerActivate() {
        this.isEditVisible = true;
    }
    
    routerDeactivate() {
        this.isEditVisible = false;
    }

    getSubTitle() {
        return "Таблица с данными";
    }

    add() {
        this.router.navigate(['/main/users/edit']);
    }

    isAdmin() {
        return this.global.isAdmin();
    }
}
