import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BlocksResponse} from '../../../../common/algs/blocks';
import {AlgsModes} from '../../../../enums/algs';

@Component({
    selector: 'alg-control-panel',
    templateUrl: './control-panel.component.html',
    styleUrls: ['./control-panel.component.scss']
})
export class ControlPanelComponent implements OnInit {

    @Input('blocks') private blocksResponse: BlocksResponse;
    @Output('onEncrypt') private encryptEmitter = new EventEmitter();
    @Output('onGenKeys') private genKeysEmitter = new EventEmitter();
    @Output('onStart') private startEmitter = new EventEmitter();

    private mode: AlgsModes;

    constructor() {
    }

    ngOnInit() {
        this.mode = AlgsModes.ENCRYPT;
    }

    click() {
        for (let block of this.blocksResponse.blocks) {
            console.log(`id: ${block.id}, name: ${block.name}, value: ${block.value}`);
        }
    }

    onToggle() {
        this.mode = this.mode === AlgsModes.ENCRYPT ? AlgsModes.DECRYPT : AlgsModes.ENCRYPT;
    }

    isEncrypt() {
        return this.mode === AlgsModes.ENCRYPT;
    }

    clickStart() {

    }
}
