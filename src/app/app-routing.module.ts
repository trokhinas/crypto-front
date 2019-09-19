import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './components/auth/login/login.component';
import {MainComponent} from './components/main/main/main.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  // special routes
  {path: '', component: MainComponent},
  {path: '**', component: MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
