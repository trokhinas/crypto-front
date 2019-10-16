import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './components/auth/login/login.component';

import {MainComponent} from './components/main/main/main.component';
import {MainGuard} from './guards/main.guard';

import {ProfileComponent} from './components/profile/profile.component';
import {CoursesMainComponent} from './components/courses/courses-main/courses-main.component';
import {AlgsMainComponent} from './components/algs/algs-main/algs-main.component';
import {TestsMainComponent} from './components/tests/tests-main.component';
import {UsersComponent} from './components/users/users.component';

import {LectureDetailsComponent} from './components/courses/lecture/lecture-details/lecture-details.component';
import {LectureListComponent} from './components/courses/lecture/lecture-list/lecture-list.component';
import {AlgorithmComponent} from './components/algs/algorithm/algorithm.component';
import {TestDetailsComponent} from './components/tests/test-details/test-details.component';
import {TestListComponent} from './components/tests/test-list/test-list.component';
import {TestCreateComponent} from './components/tests/test-create/test-create.component';

const courseRoutes: Routes = [
    {path: 'lectures', component: LectureListComponent},
    {path: 'lectures/:id', component: LectureDetailsComponent}
];

const profileRoutes: Routes = [

];

const testRoutes: Routes = [
    {path:'list', component: TestListComponent},
    {path: 'create', component: TestCreateComponent },
    {path:':id', component: TestDetailsComponent}
];

const userRoutes: Routes = [

];

const mainRoutes: Routes = [
    {path: 'profile', component: ProfileComponent, children: profileRoutes},
    {path: 'courses', component: CoursesMainComponent, children: courseRoutes},
    {path: 'algorithms', component: AlgsMainComponent},
    {path: 'tests', component: TestsMainComponent, children: testRoutes},
    // TODO подумать над системой guard для управления юзерами
    {path: 'users', component: UsersComponent, children: userRoutes, canActivate: []},
    
    //algorithms routes
    {path: 'algorithms/:algorithmBaseUrl', component: AlgorithmComponent}
];

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'main', component: MainComponent, canActivate: [MainGuard], children: mainRoutes},
    // special routes
    {path: '', redirectTo: 'main/profile', pathMatch: 'full'},
    {path: '**', redirectTo: 'main/profile', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
