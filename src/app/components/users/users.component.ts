import {Component, OnInit} from '@angular/core';
import {GridColumn, GridData} from '../../common/users';
import {UsersService} from '../../service/users/users.service';

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
        this.usersService.getUserData().subscribe(data => {
            this.columns = data.columns;
            this.data = data.data;
            
            this.displayedColumns = this.columns.map(x => x.key);
        });
    }
    
}
