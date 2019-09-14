import {Component, OnInit} from '@angular/core';
import {AuthService} from './service/auth.service';
import {ResponseStatus} from './enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.authenticate({login: 'aaa', password: 'bbb'}).subscribe(
      response => {
        if (response.status === ResponseStatus.OK) {
          this.auth.success();
        } else {
          alert(response.message);
        }
      },
      error => {alert(error.toString()); }
    );
  }
}
