export interface BlocksResponse {
    blocks: [ControlPanelBlock];
    ids: Set<string>;
    withKeysGeneration: boolean;
    withStart: boolean;
    withEncrypt: boolean;
    withEncode: boolean;
    withCheckSign: boolean;
}

export interface ControlPanelBlock {
    id: string;
    value: string;
    name: string;
}
