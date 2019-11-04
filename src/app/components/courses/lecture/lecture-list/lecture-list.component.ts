import {Component, OnInit} from '@angular/core';
import {LectureLink} from '../../../../common/courses';
import {LectureService} from '../../../../service/lecture/lecture.service';
import * as FileSaver from 'file-saver';
import {GlobalDataService} from '../../../../service/global-data.service';
import {ResponseStatus} from '../../../../enums';

@Component({
    selector: 'app-lecture-list',
    templateUrl: './lecture-list.component.html',
    styleUrls: ['./lecture-list.component.scss']
})
export class LectureListComponent implements OnInit {
    lectures : Array<LectureLink>;
    
    constructor(private service: LectureService,
                private global: GlobalDataService) {
    }
    
    ngOnInit() {
        this.initLectures();
    }
    
    initLectures() {
        this.service.getAllLectures().subscribe(lectures => this.lectures = lectures);
    }
    
    downloadLecture(id: number, name: string) {
        this.service.downloadLecture(id).subscribe(
            blob => {
                FileSaver.saveAs(blob, name);
            }
        );
    }
    
    uploadLecture(files : FileList) {
        this.service.uploadLecture(files.item(0)).subscribe(
            () => {
                alert('Файл успешно загружен');
                this.initLectures();
            },
            () => alert('Произошла ошибка')
        );
    }
    
    isTeacher() {
        return this.global.isTeacher();
    }
    
    deleteLecture(id : number) {
        this.service.deleteLecture(id).subscribe(response => {
            if (response.status == ResponseStatus.OK) {
                alert('Лекция успешно удалена');
                this.initLectures();
            } else {
                alert(response.message);
            }
        })
    }
}
