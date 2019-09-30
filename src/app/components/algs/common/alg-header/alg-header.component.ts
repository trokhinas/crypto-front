import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-alg-header',
    templateUrl: './alg-header.component.html',
    styleUrls: ['./alg-header.component.scss']
})
export class AlgHeaderComponent implements OnInit {
    @Input()title : string;
    
    constructor() {
    }
    
    ngOnInit() {
    }
    
}
