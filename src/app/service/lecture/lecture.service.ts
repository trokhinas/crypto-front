import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Urls} from '../../enums/urls';
import {map, tap} from 'rxjs/operators';
import {MyResponse} from '../../common';
import {LectureLink} from '../../common/courses';
import {ResponseStatus} from '../../enums';
import {GlobalDataService} from '../global-data.service';
import * as FileSaver from 'file-saver';
import {RequestOptions, ResponseContentType} from '@angular/http';

@Injectable({
    providedIn: 'root'
})
export class LectureService {
    
    constructor(private http: HttpClient,
                private global: GlobalDataService) {
    }
    
    getAllLectures() {
        const url = Urls.ALL_LECTURES;
        return this.http.get<MyResponse<Array<LectureLink>>>(url)
            .pipe(map(resp => {
                if (resp.status == ResponseStatus.OK)
                    return resp.data;
                else
                    alert(resp.message);
            }))
    }
    
    downloadLecture(id: number) {
        const url = Urls.DOWNLOAD_LECTURE;
        const params = new HttpParams().set("id", id.toString());
        return this.http.get(url, {params: params, responseType: 'blob'});
    }
    
    uploadLecture(file: File) {
        const url = Urls.UPLOAD_LECTURE;
        const formData: FormData = new FormData();
        const params = new HttpParams().set("userId", this.global.user().id.toString());
        formData.append('file', file, file.name);
        return this.http
            .post(url, formData, {params: params})
            .pipe(map(() => { return true; }));
    }
}
