import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './theme/main/main.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './core/home/home.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: HomeComponent, data: {title: 'Home'}},
  {path: 'not-found', component: NotFoundComponent, data: {title: 'Not Found'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
