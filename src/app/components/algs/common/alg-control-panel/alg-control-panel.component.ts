import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-alg-control-panel',
    templateUrl: './alg-control-panel.component.html',
    styleUrls: ['./alg-control-panel.component.scss']
})
export class AlgControlPanelComponent implements OnInit {
    
    @Output() send: EventEmitter<string> = new EventEmitter();
    input: string;
    
    constructor() {
        this.clear();
    }
    
    ngOnInit() {
    }
    
    clear() {
        this.input = '';
    }
}
