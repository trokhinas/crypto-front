import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {LogsService} from '../../../service/algs/common/logs.service';
import {AlgorithmService} from '../../../service/algs/algorithm.service';
import {BlocksResponse} from '../../../common/algs/blocks';
import {ControlPanelEvent} from '../../../common/algs';
import {AlgorithmCommands} from '../../../enums/algs';
import {map} from 'rxjs/operators';
import * as FileSaver from 'file-saver';
import {ResponseStatus} from '../../../enums';

@Component({
    selector: 'app-algorithm',
    templateUrl: './algorithm.component.html',
    styleUrls: ['./algorithm.component.scss']
})
export class AlgorithmComponent implements OnInit, OnDestroy {
    
    title : string;
    blocks : BlocksResponse;
    
    constructor(
        private route : ActivatedRoute,
        private logs : LogsService,
        private algService : AlgorithmService) {
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
    
    ngOnDestroy() {
        this.logs.clearLogs();
    }
    
    handleEncrypt(event : ControlPanelEvent) {
        const command = event.isEncrypt ? AlgorithmCommands.ENCRYPT : AlgorithmCommands.DECRYPT;
        this.startAlgorithm(event, command);
    }
    
    handleStart(event : ControlPanelEvent) {
        const command = AlgorithmCommands.HASH;
        this.startAlgorithm(event, command);
    }
    
    handleGenKeys(event: ControlPanelEvent) {
        this.logs.updateLogs([], [{message: 'Генерируются ключи', data: ''}]);
        this.algService.genKeys(event.isStaging)
            .subscribe(data => {
                if (data.error) {
                    this.logs.updateSystemLogsWithError(data.data);
                } else {
                    data.isStaging ?
                        this.logs.updateSystemLogs(data.data) :
                        this.logs.updateSystemLogsWithResult(data.data);
                }
            });
    }
    
    handleCode(event : ControlPanelEvent) {
        const command = event.isEncrypt ? AlgorithmCommands.CODE : AlgorithmCommands.DECODE;
        this.startAlgorithm(event, command);
    }
    
    handleSign(event : ControlPanelEvent) {
        const command = AlgorithmCommands.SIGN;
        this.startAlgorithm(event, command);
    }
    
    handleCheckSign(event : ControlPanelEvent) {
        const command = AlgorithmCommands.CHECK_SIGN;
        this.startAlgorithm(event, command);
    }
    
    private startAlgorithm(event : ControlPanelEvent, command : AlgorithmCommands) {
        const input = event.blocks['text'].value;
        this.logs.updateUserLogs(input);
        this.algService
            .startAlgorithm(event.blocks, command, event.isStaging)
            .subscribe(resp => {
                if (resp.error) {
                    this.logs.updateSystemLogsWithError(resp.data);
                } else {
                    resp.isStaging ?
                        this.logs.updateSystemLogs(resp.data) :
                        this.logs.updateSystemLogsWithResult(resp.data);
                }
            });
    }
    
    handleFileLoad(files : FileList) {
        const fileToUpload = files.item(0);
        if (fileToUpload.type !== 'image/jpeg') {
            alert('Допускаются только jpg изображения');
            return;
        }
        if (fileToUpload.size / 1024 / 1024 > 1) {
            alert('Допускаются изображения размером не более 1 MB');
            return;
        }
        this.algService.uploadFile(fileToUpload).subscribe(
            response => {
               if (response.status == ResponseStatus.OK) {
                   alert('Изображение успешно загружено');
               } else {
                   alert(response.message);
               }
            },
            () => alert('Произошла ошибка')
        );
    }
    
    handleCompression(event : ControlPanelEvent) {
        const message = 'Выполняется сжатие';
        this.logs.updateUserLogs(message);
        this.algService.compressImage(event.isStaging).subscribe(blob => {
            FileSaver.saveAs(blob, "compressed.jpg")
        })
    }
}
