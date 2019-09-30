import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
    @Input() text : string;
    
    constructor() {
    }
    
    ngOnInit() {
    }
}
