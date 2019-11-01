import {Component, OnInit} from '@angular/core';
import {LectureLink} from '../../../common/courses';

@Component({
    selector: 'app-courses-main',
    templateUrl: './courses-main.component.html',
    styleUrls: ['./courses-main.component.scss']
})
export class CoursesMainComponent implements OnInit {
    lectures : Array<LectureLink>;
    
    constructor() {
    }
    
    ngOnInit() {
    }
}
