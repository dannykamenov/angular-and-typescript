import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeListComponent } from './theme-list/theme-list.component';
import { ThemeRoutingModule } from './theme-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { RecentPostsComponent } from './recent-posts/recent-posts.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { HomeComponent } from '../core/home/home.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    ThemeListComponent,
    NewThemeComponent,
    ThemeDetailsComponent,
    RecentPostsComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRoutingModule,
    FormsModule,
    CoreModule
  ], exports: [
    ThemeListComponent,
    RecentPostsComponent,
  ]
})
export class ThemeModule { }
