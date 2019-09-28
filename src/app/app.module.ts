import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

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
      UsersComponent
  ],
  imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      RouterModule,
      FormsModule,
      MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
