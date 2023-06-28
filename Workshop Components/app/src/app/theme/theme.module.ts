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



@NgModule({
  declarations: [
    ThemeListComponent,
    NewThemeComponent,
    ThemeDetailsComponent,
    RecentPostsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    ThemeRoutingModule,
    RouterModule,
    FormsModule,
  ], exports: [
    ThemeListComponent,
    RecentPostsComponent,
  ]
})
export class ThemeModule { }
