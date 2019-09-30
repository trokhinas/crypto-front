import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-system-output',
    templateUrl: './system-output.component.html',
    styleUrls: ['./system-output.component.scss']
})
export class SystemOutputComponent implements OnInit {
    @Input() text : string;
    
    constructor() {
    }
    
    ngOnInit() {
    }
    
}
