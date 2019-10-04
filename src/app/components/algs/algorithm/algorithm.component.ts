import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LogsService} from '../../../service/algs/common/logs.service';
import {AlgorithmService} from '../../../algs/algorithm.service';
import {BlocksResponse} from '../../../common/algs/blocks';
import {MyResponse} from '../../../common';
import {ResponseStatus} from '../../../enums';
import {ControlPanelEvent, PartitionData} from '../../../common/algs';
import {AlgorithmCommands} from '../../../enums/algs';

@Component({
    selector: 'app-algorithm',
    templateUrl: './algorithm.component.html',
    styleUrls: ['./algorithm.component.scss']
})
export class AlgorithmComponent implements OnInit {

    title: string;
    blocks: BlocksResponse;
    private stagingHandler = (response: MyResponse<PartitionData>) => {
        if (response.status === ResponseStatus.OK) {
            this.logs.updateSystemLogs(response.data);
        } else {
            this.logs.updateSystemLogsWithError(response.message);
        }
    };
    private defaultHandler = (response: MyResponse<string>) => {
        if (response.status === ResponseStatus.OK) {
            this.logs.updateSystemLogsWithResult(response.data);
        } else {
            this.logs.updateSystemLogsWithError(response.message);
        }
    };

    constructor(
        private route: ActivatedRoute,
        private logs: LogsService,
        private algService: AlgorithmService) {
    }

    ngOnInit() {
        const blockResponseHandler = (response: MyResponse<BlocksResponse>) => {
            if (response.status === ResponseStatus.OK) {
                this.blocks = response.data;
            } else {
                alert(response.message);
            }
        };
        this.route.params.subscribe(
            params => {
                this.title = params['urlBase'];
                console.log(this.title);
                this.algService.setUrl(this.title);
                this.algService.getBlocks().subscribe(blockResponseHandler);
            }
        );
    }
    
    handleEncrypt(event: ControlPanelEvent) {
    
    }
    
    handleStart(event: ControlPanelEvent) {
    
    }
    
    handleGenKeys() {
    
    }
    
    handleCode(event: ControlPanelEvent) {
        const command = event.isEncrypt ? AlgorithmCommands.CODE: AlgorithmCommands.DECODE;
        const input = event.blocks.find(x => x.id === 'text').value;
        this.logs.updateUserLogs(input, event.isEncrypt);
        this.algService
            .startAlgorithm(event.blocks, command, event.isStaging)
            .subscribe(event.isStaging ? this.stagingHandler : this.defaultHandler);
    }
}
