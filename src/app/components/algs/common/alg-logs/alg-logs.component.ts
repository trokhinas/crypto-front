import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {LogsService} from '../../../../service/algs/common/logs.service';
import {StageData} from '../../../../common/algs';

@Component({
    selector: 'app-alg-logs',
    templateUrl: './alg-logs.component.html',
    styleUrls: ['./alg-logs.component.scss']
})
export class AlgLogsComponent implements OnInit {
    private userLogs: Array<String>;
    private systemLogs: Array<String>;
    @ViewChild('logs') private logs: ElementRef;

    private logMapper = (stageData: StageData): string => {
        return stageData.data ? `${stageData.message} : ${stageData.data }` : stageData.message;
    };

    constructor(
        private logsService: LogsService) {
    }
    
    ngOnInit() {
        this.logsService.userLogs.subscribe(logs => {
            this.userLogs = logs && logs.map(this.logMapper);
            this.scrollToTop();
        });
        this.logsService.systemLogs.subscribe(logs => {
            this.systemLogs = logs && logs.map(this.logMapper);
        });
    }

    scrollToTop() {
        this.logs.nativeElement.scrollTo(0, 0);
    }
}
