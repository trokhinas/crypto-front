import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-alg-logs',
    templateUrl: './alg-logs.component.html',
    styleUrls: ['./alg-logs.component.scss']
})
export class AlgLogsComponent implements OnInit {
    @Input() private userLogs: Array<String>;
    @Input() private systemLogs: Array<String>;
    
    constructor() {
    }
    
    ngOnInit() {
    }
}
