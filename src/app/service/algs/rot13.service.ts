import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Urls} from '../../enums/urls';
import {MyResponse} from '../../common';
import {BlocksResponse} from '../../common/algs/blocks';

@Injectable({
    providedIn: 'root'
})
export class Rot13Service {

    constructor(
        private http: HttpClient) {
    }

    send(source: string, isEncrypt: boolean, isStaging?: boolean) {
        return isEncrypt ? this.encrypt(source, isStaging) : this.decrypt(source, isStaging);
    }

    loadBlocks() {
        return this.http.get<MyResponse<BlocksResponse>>(Urls.ROT13_BLOCKS);
    }

    private encrypt(source: string, isStaging?: boolean) {
        const params = new HttpParams().set("isStaging", isStaging ? 'true' : 'false');
        return this.http.post<MyResponse>(Urls.ROT13_ENCRYPT, {text: source}, {params: params});
    }

    private decrypt(source: string, isStaging?: boolean) {
        const params = new HttpParams().set("isStaging", isStaging ? 'true' : 'false');
        return this.http.post<MyResponse>(Urls.ROT13_DECRYPT, {text: source}, {params: params});
    }
}
