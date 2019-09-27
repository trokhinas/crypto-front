import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PlatformLocation} from '@angular/common';

@Component({
  selector: 'app-lecture-details',
  templateUrl: './lecture-details.component.html',
  styleUrls: ['./lecture-details.component.scss']
})
export class LectureDetailsComponent implements OnInit {
    id: number;
    
    constructor(
        private route:ActivatedRoute,
        private platform: PlatformLocation) { }
    
    ngOnInit() {
        this.route.params.subscribe(params => this.id = params['id']);
    }
    
    back() {
        this.platform.back();
    }
}
