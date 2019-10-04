import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-morse',
    templateUrl: './morse.component.html',
    styleUrls: ['./morse.component.scss']
})
export class MorseComponent implements OnInit {

    private urlBase: string;

    constructor(
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(
            params => this.urlBase = params['urlBase']
        );
    }

}
