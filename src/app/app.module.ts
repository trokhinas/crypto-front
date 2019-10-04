import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {LoginComponent} from './components/auth/login/login.component';
import {MainComponent} from './components/main/main/main.component';
import {ControlPanelComponent} from './components/control-panel/control-panel.component';
import {ProfileComponent} from './components/profile/profile.component';
import {CoursesMainComponent} from './components/courses/courses-main/courses-main.component';
import {LectureLinkComponent} from './components/courses/lecture/lecture-link/lecture-link.component';
import {LectureDetailsComponent} from './components/courses/lecture/lecture-details/lecture-details.component';
import {LectureListComponent} from './components/courses/lecture/lecture-list/lecture-list.component';
import {AlgsMainComponent} from './components/algs/algs-main/algs-main.component';
import {HeaderComponent} from './components/common/header/header.component';
import {ImageComponent} from './components/common/image/image.component';
import {FooterComponent} from './components/common/footer/footer.component';
import {TestGridTileComponent} from './components/profile/test-grid-tile/test-grid-tile.component';
import { NavigationLinkComponent } from './components/control-panel/navigation-link/navigation-link.component';
import { TestsComponent } from './components/tests/tests.component';
import { UsersComponent } from './components/users/users.component';
import { AlgLogsComponent } from './components/algs/common/alg-logs/alg-logs.component';
import { UserInputComponent } from './components/algs/common/alg-logs/user-input/user-input.component';
import { SystemOutputComponent } from './components/algs/common/alg-logs/system-output/system-output.component';
import { AlgListComponent } from './components/algs/common/alg-list/alg-list.component';
import { Rot13Component } from './components/algs/rot13/rot13.component';
import { MorseComponent } from './components/algs/morse/morse.component';
import { AlgHeaderComponent } from './components/algs/common/alg-header/alg-header.component';
import { AlgControlPanelComponent } from './components/algs/common/alg-control-panel/alg-control-panel.component';
import { ControlPanelComponent as AlgsControl} from './components/algs/common/control-panel/control-panel.component';

@NgModule({
  declarations: [
      AppComponent,
      LoginComponent,
      MainComponent,
      ControlPanelComponent,
      ProfileComponent,
      CoursesMainComponent,
      LectureLinkComponent,
      LectureDetailsComponent,
      LectureListComponent,
      AlgsMainComponent,
      HeaderComponent,
      ImageComponent,
      FooterComponent,
      TestGridTileComponent,
      NavigationLinkComponent,
      TestsComponent,
      UsersComponent,
      AlgLogsComponent,
      UserInputComponent,
      SystemOutputComponent,
      AlgListComponent,
      Rot13Component,
      MorseComponent,
      AlgHeaderComponent,
      AlgControlPanelComponent,
      AlgsControl
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule,
      FormsModule,
      MatGridListModule,
      MatSlideToggleModule,
      MatCheckboxModule,
      MatButtonModule,
      MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
