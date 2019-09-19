import {Component, OnInit} from '@angular/core';
import {AuthService} from './service/auth.service';
import {ResponseStatus} from './enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
}
