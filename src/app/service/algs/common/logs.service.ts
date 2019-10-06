import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {PartitionData, StageData} from '../../../common/algs';

@Injectable({
    providedIn: 'root'
})
export class LogsService {

    private userLogsSubject: BehaviorSubject<Array<StageData>>;
    private systemLogsSubject: BehaviorSubject<Array<StageData>>;

    public userLogs: Observable<Array<StageData>>;
    public systemLogs: Observable<Array<StageData>>;

    constructor() {
        this.userLogsSubject = new BehaviorSubject(null);
        this.systemLogsSubject = new BehaviorSubject(null);

        this.userLogs = this.userLogsSubject.asObservable();
        this.systemLogs = this.systemLogsSubject.asObservable();
    }
    
    clearLogs() {
        this.userLogsSubject.next([]);
        this.systemLogsSubject.next([]);
    }

    updateLogs(systemLogs: Array<StageData>, userLogs: Array<StageData>) {
        this.systemLogsSubject.next(systemLogs);
        this.userLogsSubject.next(userLogs);
    }

    updateUserLogs(input: string) {
        this.userLogsSubject.next([this.getStartMessage(input)]);
    }

    updateSystemLogsWithResult(result: string) {
        this.systemLogsSubject.next([this.getResultMessage(result)]);
    }

    updateSystemLogs(partitionData: PartitionData) {
        const result = new Array<StageData>();
        for (let data of partitionData.stageData) {
            result.push(data);
        }
        result.push(this.getResultMessage(partitionData.result));

        this.systemLogsSubject.next(result);
    }
    
    updateSystemLogsWithError(error: string) {
        this.systemLogsSubject.next([{message: 'Произошла ошибка', data: error}]);
    }

    private getResultMessage(result: string): StageData {
        const message = `Результируемое сообщение`;
        return {message: message, data: `[${result}]`};
    }

    private getStartMessage(input: string): StageData {
        const result = new Array<StageData>();
        const message = `Обрабатывается сообщение`;
        return {message: message, data: `[${input}]`};
    }
}
