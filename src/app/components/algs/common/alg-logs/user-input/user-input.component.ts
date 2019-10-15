import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-user-input',
    templateUrl: './user-input.component.html',
    styleUrls: ['./user-input.component.scss']
})
export class UserInputComponent implements OnInit {
    @Input() text : string;
    private symbolsInLine = 70;
    
    constructor() {
    }
    
    ngOnInit() {
        let slicedText = this.text;
        let parts: string[] = [];
        while (slicedText.length > this.symbolsInLine) {
            let part = slicedText.substring(0, this.symbolsInLine);
            slicedText = slicedText.substring(this.symbolsInLine + 1);
            parts.push(part);
        }
        parts.push(slicedText);
        this.text = parts.join("\n");
    }
}
