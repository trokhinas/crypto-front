import {Component, Input, OnInit} from '@angular/core';
import {TaskTypes} from '../../../../../../enums/tests';

@Component({
    selector: 'app-answers-list',
    templateUrl: './answers-list.component.html',
    styleUrls: ['./answers-list.component.scss']
})
export class AnswersListComponent implements OnInit {
    @Input() type: TaskTypes;
    
    constructor() {
    }
    
    ngOnInit() {
    }
    
}
