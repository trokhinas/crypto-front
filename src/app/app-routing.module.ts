import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {MainComponent} from './components/main/main/main.component';
import {MainGuard} from './guards/main.guard';
import {ProfileComponent} from './components/common/profile/profile.component';
import {CoursesMainComponent} from './components/common/courses/courses-main/courses-main.component';
import {LectureDetailsComponent} from './components/common/courses/lecture/lecture-details/lecture-details.component';
import {LectureListComponent} from './components/common/courses/lecture/lecture-list/lecture-list.component';
import {AlgsMainComponent} from './components/common/algs/algs-main/algs-main.component';

const courseRoutes: Routes = [
    {path: 'lectures', component: LectureListComponent},
    {path: 'lectures/:id', component: LectureDetailsComponent}
];

const profileRoutes: Routes = [

];

const algsRoutes: Routes = [

];

const mainRoutes: Routes = [
    {path: 'profile', component: ProfileComponent, children: profileRoutes},
    {path: 'courses', component: CoursesMainComponent, children: courseRoutes},
    {path: 'algorithms', component: AlgsMainComponent, children: algsRoutes}
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
