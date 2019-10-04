import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {AlgorithmCommands} from '../enums/algs';
import {ControlPanelBlock} from '../common/algs/blocks';
import {MyResponse} from '../common';

@Injectable({
    providedIn: 'root'
})
export class AlgorithmService {
    set urlBase(value: string) {
        this._urlBase = value;
    }

    setUrl(value: string) {
        this._urlBase = value;
    }

    private _urlBase: string;

    constructor(
        private http: HttpClient) {
    }

    getBlocks() {
        const url = this.buildUrl(AlgorithmCommands.GET_BLOCKS);
        return this.http.get<MyResponse>(url);
    }

    genKeys() {
        const url = this.buildUrl(AlgorithmCommands.GEN_KEYS);
        return this.http.get<MyResponse>(url);
    }

    startAlgorithm(blocks: Array<ControlPanelBlock>, command: AlgorithmCommands, isStaging?: boolean) {
        const url = this.buildUrl(command);
        const params = new HttpParams().set('isStaging', isStaging ? 'true' : 'false');
        return this.http.post<MyResponse>(url, {blocks: blocks}, {params: params});
    }

    private buildUrl(command: AlgorithmCommands) {
        return `api/${this._urlBase}/${command}`;
    }
}
