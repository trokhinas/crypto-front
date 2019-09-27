import {Component, Input, OnInit} from '@angular/core';
import {LectureLink} from '../../../../common/courses';
import {fakeLectures} from '../../../../common/fakes';

@Component({
  selector: 'app-lecture-list',
  templateUrl: './lecture-list.component.html',
  styleUrls: ['./lecture-list.component.scss']
})
export class LectureListComponent implements OnInit {
    lectures: Array<LectureLink>;

    constructor() { }

    ngOnInit() {
        // TODO LectureListComponent самостоятельно подтягиват список всех лекций
        this.lectures = fakeLectures;
    }
}
