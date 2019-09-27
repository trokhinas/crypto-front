import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-test-grid-tile',
  templateUrl: './test-grid-tile.component.html',
  styleUrls: ['./test-grid-tile.component.scss']
})
export class TestGridTileComponent implements OnInit {
    @Input() testTitle: string;
    @Input() mark: number;

    constructor() { }

    ngOnInit() {
    }
}
