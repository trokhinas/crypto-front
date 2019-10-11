import {Component, OnInit} from '@angular/core';
import {PlatformLocation} from '@angular/common';

@Component({
    selector: 'app-go-back',
    templateUrl: './go-back.component.html',
    styleUrls: ['./go-back.component.scss']
})
export class GoBackComponent implements OnInit {

    constructor(private loaction: PlatformLocation) {
    }

    ngOnInit() {
    }

    back() {
       this.loaction.back();
    }

}
