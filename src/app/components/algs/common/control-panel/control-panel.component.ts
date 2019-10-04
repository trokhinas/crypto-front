import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BlocksResponse} from '../../../../common/algs/blocks';
import {AlgsModes} from '../../../../enums/algs';
import {ControlPanelEvent} from '../../../../common/algs';

@Component({
    selector: 'alg-control-panel',
    templateUrl: './control-panel.component.html',
    styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

    @Input('blocks') blocksResponse: BlocksResponse;
    @Output('onEncrypt') private encryptEmitter = new EventEmitter<ControlPanelEvent>();
    @Output('onStart') private startEmitter = new EventEmitter<ControlPanelEvent>();
    @Output('onCode') private codeEmitter = new EventEmitter<ControlPanelEvent>();
    @Output('onGenKeys') private genKeysEmitter = new EventEmitter();

    mode: AlgsModes;

    constructor() {
    }

    ngOnInit() {
        this.mode = AlgsModes.ENCRYPT;
    }

    onToggle() {
        this.mode = this.mode === AlgsModes.ENCRYPT ? AlgsModes.DECRYPT : AlgsModes.ENCRYPT;
    }

    isEncrypt() {
        return this.mode === AlgsModes.ENCRYPT;
    }

    clickStart() {
        this.startEmitter.emit(this.generateEvenetPayload());
    }
    
    clickGenerate() {
        this.genKeysEmitter.emit();
    }
    
    clickEncrypt() {
        this.encryptEmitter.emit(this.generateEvenetPayload());
    }
    
    clickCode() {
        this.codeEmitter.emit(this.generateEvenetPayload());
    }
    
    private generateEvenetPayload(): ControlPanelEvent {
        return {
            blocks: this.blocksResponse.blocks,
            isEncrypt: this.isEncrypt(),
            isStaging: false
        };
    }
}
