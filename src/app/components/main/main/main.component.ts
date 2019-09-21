import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {GlobalDataService} from '../../../service/global-data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

    constructor(
        private auth: AuthService,
        private globalData: GlobalDataService) { }

    ngOnInit() {

    }

}
