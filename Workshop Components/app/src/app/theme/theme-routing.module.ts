import { RouterModule, Routes } from "@angular/router";
import { NewThemeComponent } from "./new-theme/new-theme.component";
import { ThemeDetailsComponent } from "./theme-details/theme-details.component";
import { MainComponent } from "./main/main.component";

const routes: Routes = [
    {path: 'theme', children: [
        {path: 'list', component: MainComponent, data: {title: 'Themes'}},
        {path: 'new', component: NewThemeComponent},
        {path: 'details/:id', component: ThemeDetailsComponent}
    ]}
];


export const ThemeRoutingModule = RouterModule.forChild(routes);