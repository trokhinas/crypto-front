import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {GlobalDataService} from '../../../../service/global-data.service';

@Component({
  selector: 'app-lecture-link',
  templateUrl: './lecture-link.component.html',
  styleUrls: ['./lecture-link.component.scss']
})
export class LectureLinkComponent implements OnInit {
    @Input() lectureId: number;
    @Input() lectureTitle: string;
    
    @Output('delete') deleteEmitter = new EventEmitter<number>();
    @Output('download') downloadEmitter = new EventEmitter<number>();
    
    isFocused : boolean;

    constructor(private global: GlobalDataService) { }
    
    ngOnInit() {
        this.isFocused = false;
    }
    
    emitDelete() {
        this.deleteEmitter.emit(this.lectureId);
    }
    
    emitDownload() {
        this.downloadEmitter.emit(this.lectureId);
    }
    
    setFocus() {
        this.isFocused = true;
    }
    
    clearFocus() {
        this.isFocused = false;
    }
    
    isAccessed() {
        return this.global.isTeacher();
    }
}
