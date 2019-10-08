import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-test-details',
    templateUrl: './test-details.component.html',
    styleUrls: ['./test-details.component.scss']
})
export class TestDetailsComponent implements OnInit {

    id: number;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        console.log(this.route.snapshot.params);
        this.id = this.route.snapshot.params.id;
    }

}
