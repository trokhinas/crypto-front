export interface GridDataResponse {
    columns: Array<GridColumn>;
    data: Array<GridData>;
}

export interface GridColumn {
    key: string;
    header: string;
}

export interface GridData {
    [key: string]: any;
}
