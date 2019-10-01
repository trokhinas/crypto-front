import {Component, OnInit} from '@angular/core';
import {Rot13Service} from '../../../service/algs/rot13.service';
import {ResponseStatus} from '../../../enums';
import {LogsService} from '../../../service/algs/common/logs.service';
import {AlgStartData} from '../common/alg-control-panel/alg-control-panel.component';

@Component({
    selector: 'app-rot13',
    templateUrl: './rot13.component.html',
    styleUrls: ['./rot13.component.scss'],
    providers: [LogsService]
})
export class Rot13Component implements OnInit {
    title = 'Rot-13';
    
    constructor(
        private rot13: Rot13Service,
        private logsService: LogsService) {
    }
    
    ngOnInit() {
    }

    handleSend(data : AlgStartData) {
        const {input, isEncrypt, isStaging} = data;
        if (input === '' || input === null) {
            alert("Сообщение пустое!");
            return;
        }
        this.logsService.updateUserLogs(input, isEncrypt);
        console.log(`send ${input} with isEncrypt ${isEncrypt}`);
        this.rot13.send(input, isEncrypt, isStaging).subscribe(response => {
             if (response.status == ResponseStatus.OK) {
                 this.logsService.updateSystemLogsWithResult(response.data);
             }
             else {
                 alert(response.message)
             }
        });
    }

    handleSendWithPartition(data: AlgStartData) {
        const {input, isEncrypt, isStaging} = data;
        if (input === '' || input === null) {
            alert("Сообщение пустое!");
            return;
        }
        this.logsService.updateUserLogs(input, isEncrypt);
        console.log(`send ${input} with isEncrypt ${isEncrypt}`);
        this.rot13.send(input, isEncrypt, isStaging).subscribe(response => {
            if (response.status == ResponseStatus.OK) {
                this.logsService.updateSystemLogs(response.data);
            }
            else {
                alert(response.message)
            }
        });
    }
}
