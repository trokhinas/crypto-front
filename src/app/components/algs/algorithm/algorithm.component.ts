import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LogsService} from '../../../service/algs/common/logs.service';
import {AlgorithmService} from '../../../service/algs/algorithm.service';
import {BlocksResponse} from '../../../common/algs/blocks';
import {ControlPanelEvent} from '../../../common/algs';
import {AlgorithmCommands} from '../../../enums/algs';
import {map} from 'rxjs/operators';

@Component({
    selector: 'app-algorithm',
    templateUrl: './algorithm.component.html',
    styleUrls: ['./algorithm.component.scss']
})
export class AlgorithmComponent implements OnInit, OnDestroy {

    title: string;
    blocks: BlocksResponse;

    constructor(
        private route: ActivatedRoute,
        private logs: LogsService,
        private algService: AlgorithmService) {
    }

    ngOnInit() {
        this.route.params
            .pipe(map(
                params => params['urlBase']
            ))
            .subscribe(url => {
                this.title = url;
                this.algService.setUrl(url);
                this.algService.getBlocks().subscribe(data => this.blocks = data);
            });
    }
    
    ngOnDestroy(){
        this.logs.clearLogs();
    }
    
    handleEncrypt(event: ControlPanelEvent) {
        const command = event.isEncrypt ? AlgorithmCommands.ENCRYPT: AlgorithmCommands.DECRYPT;
        this.startAlgorithm(event, command);
    }
    
    handleStart(event: ControlPanelEvent) {
    
    }
    
    handleGenKeys() {
    
    }
    
    handleCode(event: ControlPanelEvent) {
        const command = event.isEncrypt ? AlgorithmCommands.CODE: AlgorithmCommands.DECODE;
        this.startAlgorithm(event, command);
    }
    
    private startAlgorithm(event: ControlPanelEvent, command: AlgorithmCommands) {
        const input = event.blocks['text'].value;
        this.logs.updateUserLogs(input);
        this.algService
            .startAlgorithm(event.blocks, command, event.isStaging)
            .subscribe(resp => {
                if (resp.error) {
                    this.logs.updateSystemLogsWithError(resp.data);
                }
                else {
                    resp.isStaging ?
                        this.logs.updateSystemLogs(resp.data) :
                        this.logs.updateSystemLogsWithResult(resp.data);
                }
            });
    }
}
