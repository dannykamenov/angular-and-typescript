import { RouterModule, Routes } from '@angular/router';
import { NewThemeComponent } from './new-theme/new-theme.component';
import { ThemeDetailsComponent } from './theme-details/theme-details.component';
import { MainComponent } from './main/main.component';
import { ThemeResolver } from './resolvers/theme.resolver';

const routes: Routes = [
  { path: 'list', component: MainComponent, data: { title: 'Themes' } },
  { path: 'new', component: NewThemeComponent },
  {
    path: 'details/:id',
    resolve: { theme: ThemeResolver },
    component: ThemeDetailsComponent,
  },
];

export const ThemeRoutingModule = RouterModule.forChild(routes);
