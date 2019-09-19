import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../../service/auth.service';
import {AuthResponseWrapper, LoginRequest} from '../../../common/auth';
import {ResponseStatus} from '../../../enums';
import {Router} from '@angular/router';

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
  private authRespHandler = (response: AuthResponseWrapper): void => {
    if (response.status === ResponseStatus.OK) {
      this.auth.success(response.data);
      this.router.navigate(['main']);
    } else {
      alert(response.message);
    }
  };
  private errorRespHandler = (error: any): void => {alert(error);};

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  authenticate() {
    this.auth.authenticate(this.data).subscribe(
      this.authRespHandler,
      this.errorRespHandler
    );
  }

  fakeAuthenticate() {
    this.auth.fake().subscribe(
      this.authRespHandler,
      this.errorRespHandler
    );
  }
}


