import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LogsService} from '../../../service/algs/common/logs.service';
import {AlgorithmService} from '../../../algs/algorithm.service';
import {BlocksResponse} from '../../../common/algs/blocks';
import {MyResponse} from '../../../common';
import {ResponseStatus} from '../../../enums';

@Component({
    selector: 'app-algorithm',
    templateUrl: './algorithm.component.html',
    styleUrls: ['./algorithm.component.scss']
})
export class AlgorithmComponent implements OnInit {

    title: string;
    blocks: BlocksResponse;

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

}
