import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-rot13',
    templateUrl: './rot13.component.html',
    styleUrls: ['./rot13.component.scss']
})
export class Rot13Component implements OnInit {
    
    constructor() {
    }
    
    ngOnInit() {
    }
    
    onSend(input : string) {
        alert(input);
    }
}
