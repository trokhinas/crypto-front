import {Component, OnInit} from '@angular/core';
import {GridColumn, GridData} from '../../common/users';
import {UsersService} from '../../service/users/users.service';
import {GridColumnType} from '../../enums/columns';
import {ResponseStatus} from '../../enums';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
    columns: Array<GridColumn>;
    data: Array<GridData>;
    displayedColumns : Array<String>;
    
    
    constructor(private usersService: UsersService) {
    }
    
    ngOnInit() {
        this.initData();
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
        console.log(row);
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
}
