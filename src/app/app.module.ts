import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LoginComponent } from './components/auth/login/login.component';
import { MainComponent } from './components/main/main/main.component';
import { ControlPanelComponent } from './components/common/control-panel/control-panel.component';
import { ProfileComponent } from './components/common/profile/profile.component';
import { CoursesMainComponent } from './components/common/courses/courses-main/courses-main.component';
import { LectureLinkComponent } from './components/common/courses/lecture/lecture-link/lecture-link.component';
import { LectureDetailsComponent } from './components/common/courses/lecture/lecture-details/lecture-details.component';
import { LectureListComponent } from './components/common/courses/lecture/lecture-list/lecture-list.component';
import { AlgsMainComponent } from './components/common/algs/algs-main/algs-main.component';
import { HeaderComponent } from './components/common/header/header.component';
import { ImageComponent } from './components/common/image/image.component';
import { FooterComponent } from './components/common/footer/footer.component';

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
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
