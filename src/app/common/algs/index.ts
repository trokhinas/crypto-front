export interface StageData {
    message: string;
    data: any;
}

export interface PartitionData {
    stageData: [StageData];
    result: any;
}
