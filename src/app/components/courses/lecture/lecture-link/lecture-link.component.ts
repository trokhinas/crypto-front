import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-lecture-link',
  templateUrl: './lecture-link.component.html',
  styleUrls: ['./lecture-link.component.scss']
})
export class LectureLinkComponent implements OnInit {
    @Input() lectureId: number;
    @Input() lectureTitle: string;

    constructor() { }
    
    ngOnInit() {
    }

}
