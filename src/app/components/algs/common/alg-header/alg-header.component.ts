import {Component, Input, OnInit} from '@angular/core';
import {PlatformLocation} from '@angular/common';

@Component({
    selector: 'app-alg-header',
    templateUrl: './alg-header.component.html',
    styleUrls: ['./alg-header.component.scss']
})
export class AlgHeaderComponent implements OnInit {
    @Input()title: string;
    
    constructor(
        private location: PlatformLocation) {
    }
    
    ngOnInit() {
    }

    back() {
        this.location.back();
    }
}
