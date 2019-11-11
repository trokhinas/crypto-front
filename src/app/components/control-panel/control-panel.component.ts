import {Component, Input, OnInit} from '@angular/core';
import {GridData} from '../../common/auth';
import {Roles} from '../../enums';
import {Router} from '@angular/router';

interface PanelLink {
    link: string;
    icon: string;
    text: string;
}

@Component({
  selector: 'app-control-panel',
  templateUrl: './control-panel.component.html',
  styleUrls: ['./control-panel.component.scss']
})

export class ControlPanelComponent implements OnInit {
    @Input() private user: GridData;
    @Input() private role: Roles;

    links: Array<PanelLink> = [
        {link: 'profile', icon: 'profile.svg', text: 'Профиль'},
        {link: 'courses/lectures', icon: 'course.svg', text: 'Курсы'},
        {link: 'tests/list', icon: 'tests.svg', text: 'Тесты'},
        {link: 'algorithms', icon: 'algo.svg', text: 'Алгоритмы'},
    ];
  
    constructor() { }
  
    ngOnInit() {
    }
    
    isAdminOrTeacher() {
        return this.role === Roles.ADMIN || this.role === Roles.TEACHER;
    }
}
