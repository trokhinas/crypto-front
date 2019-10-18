import {Component, Input, OnInit} from '@angular/core';
import {Option} from '../../../common/components/Option';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
    @Input() options: Array<Option>;

    constructor() {
    }

    ngOnInit() {
    }

}
