import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {PlatformLocation} from '@angular/common';

@Component({
    selector: 'app-algs-main',
    templateUrl: './algs-main.component.html',
    styleUrls: ['./algs-main.component.scss']
})
export class AlgsMainComponent implements OnInit {
    title : string;
    
    constructor(
        private router: Router,
        private location: PlatformLocation) {
    }
    
    ngOnInit() {
    }
    
    isMain() {
        return this.router.url.endsWith("algorithms");
    }
    
    back() {
        this.location.back();
    }
}
