import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
    selector: 'app-test-control-panel',
    templateUrl: './test-control-panel.component.html',
    styleUrls: ['./test-control-panel.component.scss']
})
export class TestControlPanelComponent implements OnInit {
    @Output('onSubmit') private submitEmitter = new EventEmitter();
    @Output('onClear') private clearEmitter = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    emitSend() {
        this.submitEmitter.emit();
    }

    emitClear() {
        this.clearEmitter.emit();
    }

}
