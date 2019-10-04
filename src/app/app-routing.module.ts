import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/auth/login/login.component';

import {MainComponent} from './components/main/main/main.component';
import {MainGuard} from './guards/main.guard';

import {ProfileComponent} from './components/profile/profile.component';
import {CoursesMainComponent} from './components/courses/courses-main/courses-main.component';
import {AlgsMainComponent} from './components/algs/algs-main/algs-main.component';
import {TestsComponent} from './components/tests/tests.component';
import {UsersComponent} from './components/users/users.component';

import {LectureDetailsComponent} from './components/courses/lecture/lecture-details/lecture-details.component';
import {LectureListComponent} from './components/courses/lecture/lecture-list/lecture-list.component';
import {Rot13Component} from './components/algs/rot13/rot13.component';
import {MorseComponent} from './components/algs/morse/morse.component';

const courseRoutes: Routes = [
    {path: 'lectures', component: LectureListComponent},
    {path: 'lectures/:id', component: LectureDetailsComponent}
];

const profileRoutes: Routes = [

];

const testRoutes: Routes = [

];

const userRoutes: Routes = [

];

const mainRoutes: Routes = [
    {path: 'profile', component: ProfileComponent, children: profileRoutes},
    {path: 'courses', component: CoursesMainComponent, children: courseRoutes},
    {path: 'algorithms', component: AlgsMainComponent},
    {path: 'tests', component: TestsComponent, children: testRoutes},
    // TODO подумать над системой guard для управления юзерами
    {path: 'users', component: UsersComponent, children: userRoutes, canActivate: []},
    
    //algorithms routes
    {path: 'algorithms/rot-13', component: Rot13Component},
    {path: 'algorithms/morse', component: MorseComponent},
];

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'main', component: MainComponent, canActivate: [MainGuard], children: mainRoutes},
    // special routes
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: '**', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
