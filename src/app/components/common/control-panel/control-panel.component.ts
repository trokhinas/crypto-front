import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../../common/auth';
import {Roles} from '../../../enums';
import {Router} from '@angular/router';

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {
    @Input() private user: User;
    @Input() private role: Roles;
  
    constructor(private router: Router) { }
  
    ngOnInit() {
    }
    
    isAdmin() {
        return this.role === Roles.ADMIN;
    }
}
