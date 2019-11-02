import {GridColumnType} from '../../enums/columns';

export interface GridDataResponse {
    columns: Array<GridColumn>;
    data: Array<GridData>;
}

export interface GridColumn {
    key: string;
    header: string;
    type: GridColumnType;
}

export interface GridData {
    [key: string]: any;
}
