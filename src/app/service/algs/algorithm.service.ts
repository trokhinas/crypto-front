import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AlgorithmCommands} from '../../enums/algs';
import {ControlPanelBlock} from '../../common/algs/blocks';
import {MyResponse} from '../../common';
import {ResponseStatus} from '../../enums';
import {map} from 'rxjs/operators';
import {GlobalDataService} from '../global-data.service';
import * as FileSaver from 'file-saver';

@Injectable({
    providedIn: 'root'
})
export class AlgorithmService {
    setUrl(value: string) {
        this._urlBase = value;
    }

    private _urlBase: string;

    constructor(
        private http: HttpClient,
        private global: GlobalDataService) {
    }

    getBlocks() {
        const url = this.buildUrl(AlgorithmCommands.GET_BLOCKS);
        return this.http.get<MyResponse>(url)
            .pipe(map(response => response.status === ResponseStatus.OK ? response.data : alert(response.message)));
    }

    genKeys(isStaging?: boolean) {
        const url = this.buildUrl(AlgorithmCommands.GEN_KEYS);
        const params = new HttpParams().set('isStaging', isStaging ? 'true' : 'false');
        return this.http.get<MyResponse>(url, {params: params})
            .pipe(map(response => {
                if (response.status == ResponseStatus.OK) {
                    return {error: false, data: response.data, isStaging: isStaging};
                } else {
                    return {error: true, data: response.message, isStaging: isStaging};
                }
            }));
    }
    
    uploadFile(file : File) {
        const url = this.buildUrl(AlgorithmCommands.UPLOAD_FILE);
        const formData: FormData = new FormData();
        const params = new HttpParams().set('id', this.global.user().id.toString());
        formData.append('file', file, file.name);
        
        return this.http
            .post<MyResponse>(url, formData, {params: params});
    }
    
    compressImage(isStaging: boolean) {
        const url = this.buildUrl(AlgorithmCommands.COMPRESSION);
        const params = new HttpParams().set('id', this.global.user().id.toString());
        if (isStaging) {
            const transformUrl = this.buildUrl(AlgorithmCommands.TRANSFORM);
            this.http.get(transformUrl, {params: params, responseType: 'blob'}).subscribe( blob =>
                FileSaver.saveAs(blob, "transformed.jpg")
            );
        }
        return this.http.get(url, {params: params, responseType: 'blob'});
    }

    startAlgorithm(blocks: Array<ControlPanelBlock>, command: AlgorithmCommands, isStaging?: boolean) {
        const url = this.buildUrl(command);
        const params = new HttpParams().set('isStaging', isStaging ? 'true' : 'false');
        return this.http.post<MyResponse>(url, {blocks: blocks}, {params: params})
            .pipe(map(response =>
                response.status === ResponseStatus.OK ?
                    {error: false, data: response.data, isStaging: isStaging}
                    :
                    {error: true, data: response.message, isStaging: isStaging}
            ));
    }

    private buildUrl(command: AlgorithmCommands) {
        return `api/${this._urlBase}/${command}`;
    }
    
    private handleError(e : any) {
        console.log(e);
    }
}
