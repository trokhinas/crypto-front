import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-image',
    template: '<img *ngIf="filepath" [src]="filepath"  width="98" height="20" alt="">',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
    @Input() filename: string;
    filepath: string;
    
    constructor() {
    }
    
    ngOnInit() {
        this.filepath = `assets/img/${this.filename}`;
    }
}
