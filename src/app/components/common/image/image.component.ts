import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-icon',
    template: '<img *ngIf="filepath" [src]="filepath"  [width]="width" [height]="height">',
    styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {
    @Input() filename: string;
    @Input() width: number;
    @Input() height: number;

    filepath: string;
    private DEFAULT_HEIGHT = 20;
    private DEFAULT_WIDTH = 20;
    
    constructor() {
    }
    
    ngOnInit() {
        this.filepath = `assets/img/${this.filename}`;
        this.width = this.width || this.DEFAULT_WIDTH;
        this.height = this.height || this.DEFAULT_HEIGHT;
    }
}
