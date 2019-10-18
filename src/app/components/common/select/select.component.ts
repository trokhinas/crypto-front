import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Option} from '../../../common/components/Option';

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss']
})
export class SelectComponent<V = any> implements OnInit {
    @Input() options: Array<Option>;
    @Output('onSelect') selectEmitter = new EventEmitter<Option<V>>();

    constructor() {
    }

    ngOnInit() {
    }
    
    selectionChange(option: Option<V>) {
        this.selectEmitter.emit(option);
    }
}
