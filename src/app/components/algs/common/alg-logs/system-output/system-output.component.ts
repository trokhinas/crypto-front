import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-system-output',
    templateUrl: './system-output.component.html',
    styleUrls: ['./system-output.component.scss']
})
export class SystemOutputComponent implements OnInit {
    @Input() text : string;
    private symbolsInLine = 70;
    
    constructor() {
    }
    
    ngOnInit() {
        let slicedText = this.text;
        let parts: string[] = [];
        while (slicedText.length > this.symbolsInLine) {
            let part = slicedText.substring(0, this.symbolsInLine);
            slicedText = slicedText.substring(this.symbolsInLine);
            parts.push(part);
        }
        parts.push(slicedText);
        this.text = parts.join("\n");
    }
    
}
