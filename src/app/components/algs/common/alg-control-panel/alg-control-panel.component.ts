import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AlgsModes} from '../../../../enums/algs';

export interface AlgStartData {
    input: string;
    isEncrypt: boolean;
    isStaging: boolean;
}
@Component({
    selector: 'app-alg-control-panel',
    templateUrl: './alg-control-panel.component.html',
    styleUrls: ['./alg-control-panel.component.scss']
})
export class AlgControlPanelComponent implements OnInit {

    input: string;
    @Input() mode: AlgsModes;

    @Output() onSend: EventEmitter<AlgStartData> = new EventEmitter();
    @Output() onPartitionSend: EventEmitter<AlgStartData> = new EventEmitter();
    @Output() onChangeMode: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {
    }
    
    ngOnInit() {
        this.input = '';
        this.mode = AlgsModes.ENCRYPT;
    }
    
    clear() {
        this.input = '';
    }

    isEncrypt() {
        return this.mode === AlgsModes.ENCRYPT;
    }

    onToggle() {
        this.mode = this.isEncrypt() ? AlgsModes.DECRYPT : AlgsModes.ENCRYPT;
        console.log(this.mode + this.isEncrypt());
    }

    emitSend() {
        console.log(this.input);
        this.onSend.emit({
            input: this.input,
            isEncrypt: this.isEncrypt(),
            isStaging: false
        });
    }

    emitPartitionSend() {
        console.log(this.input);
        this.onPartitionSend.emit({
            input: this.input,
            isEncrypt: this.isEncrypt(),
            isStaging: true
        });    }
}
