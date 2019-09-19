import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {AuthResponseWrapper, LoginRequest} from '../../../common/auth';
import {ResponseStatus} from '../../../enums';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private data: LoginRequest = {
    login: '',
    password: ''
  };
  private returnUrl: string;
  private authRespHandler = (response: AuthResponseWrapper): void => {
    if (response.status === ResponseStatus.OK) {
      this.router.navigate(['main']);
    } else {
      alert(response.message);
    }
  };
  private errorRespHandler = (error: any): void => {alert(error);};

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
    // reset login status
    this.auth.logout();

    this.returnUrl = this.router.routerState.root.snapshot.queryParams['returnUrl'] || 'main';
  }

  authenticate() {
    this.auth.authenticate(this.data).pipe(first()).subscribe(
      this.authRespHandler,
      this.errorRespHandler
    );
  }

  fakeAuthenticate() {
    this.auth.fake().pipe(first()).subscribe(
      this.authRespHandler,
      this.errorRespHandler
    );
  }
}


