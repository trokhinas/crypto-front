import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {MainComponent} from './components/main/main/main.component';
import {MainGuard} from './guards/main.guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'main', component: MainComponent, canActivate: [MainGuard]},
  // special routes
  {path: '', redirectTo: 'main', pathMatch: 'full'},
  {path: '**', redirectTo: 'main', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
