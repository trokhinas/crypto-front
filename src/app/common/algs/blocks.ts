export interface BlocksResponse {
    blocks: [ControlPanelBlock];
    ids: Set<string>;
    buttonsMap: Map<string, boolean>;
}

export interface ControlPanelBlock {
    id: string;
    value: string;
    name: string;
}
