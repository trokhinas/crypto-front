import {ControlPanelBlock} from './blocks';

export interface StageData {
    message: string;
    data: any;
}

export interface PartitionData {
    stageData: [StageData];
    result: any;
}

export interface ControlPanelEvent {
    blocks: [ControlPanelBlock];
    isStaging: boolean;
    isEncrypt: boolean;
}
