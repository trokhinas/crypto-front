import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BlocksResponse, ControlPanelBlock} from '../../../../common/algs/blocks';
import {ControlPanelEvent} from '../../../../common/algs';
import {Mode} from '../../../../common/algs/mode';
import {DisplayedButtons} from '../../../../enums/algs';

@Component({
    selector: 'alg-control-panel',
    templateUrl: './control-panel.component.html',
    styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

    @Input('blocks') blocksResponse: BlocksResponse;
    blocks: Array<ControlPanelBlock>;
    
    @Output('onEncrypt') private encryptEmitter = new EventEmitter<ControlPanelEvent>();
    @Output('onStart') private startEmitter = new EventEmitter<ControlPanelEvent>();
    @Output('onCode') private codeEmitter = new EventEmitter<ControlPanelEvent>();
    @Output('onGenKeys') private genKeysEmitter = new EventEmitter();
    @Output('onCheckSign') private checkSignEmitter = new EventEmitter<ControlPanelEvent>();
    @Output('onSign') private signEmitter = new EventEmitter<ControlPanelEvent>();

    mode: Mode;
    isStaging: boolean;
    
    encrypt = DisplayedButtons.ENCRYPT;
    start = DisplayedButtons.START;
    encode = DisplayedButtons.ENCODE;
    genKeys = DisplayedButtons.KEY_GEN;
    checkSign = DisplayedButtons.CHECK_SIGN;

    constructor() {
    }

    ngOnInit() {
        this.mode = new Mode(true);
        this.isStaging = false;
        this.blocks = this.blocksResponse.blocks;
    }

    onToggle() {
        this.mode.change();
    }
    
    onChangeStaging() {
        this.isStaging = !this.isStaging;
    }

    clickStart() {
        this.startEmitter.emit(this.generateEventPayload());
    }
    
    clickGenerate() {
        this.genKeysEmitter.emit(this.generateEventPayload());
    }
    
    clickEncrypt() {
        this.encryptEmitter.emit(this.generateEventPayload());
    }
    
    clickCode() {
        this.codeEmitter.emit(this.generateEventPayload());
    }
    
    clickCheckSign() {
        this.checkSignEmitter.emit(this.generateEventPayload());
    }
    
    clickSign() {
        this.signEmitter.emit(this.generateEventPayload());
    }
    
    private generateEventPayload(): ControlPanelEvent {
        return {
            blocks: this.blocksResponse.blocks,
            isEncrypt: this.mode.value(),
            isStaging: this.isStaging
        };
    }
    
    isDisplayed(buttons: DisplayedButtons) {
        return this.blocksResponse.buttonsMap[buttons];
    }
}
