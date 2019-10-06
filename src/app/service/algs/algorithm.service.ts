import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AlgorithmCommands} from '../../enums/algs';
import {ControlPanelBlock} from '../../common/algs/blocks';
import {MyResponse} from '../../common';
import {ResponseStatus} from '../../enums';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AlgorithmService {
    setUrl(value: string) {
        this._urlBase = value;
    }

    private _urlBase: string;

    constructor(
        private http: HttpClient) {
    }

    getBlocks() {
        const url = this.buildUrl(AlgorithmCommands.GET_BLOCKS);
        return this.http.get<MyResponse>(url)
            .pipe(map(response => response.status === ResponseStatus.OK ? response.data : alert(response.message)));
    }

    genKeys() {
        const url = this.buildUrl(AlgorithmCommands.GEN_KEYS);
        return this.http.get<MyResponse>(url);
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
}
