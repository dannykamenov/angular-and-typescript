import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { LogoutComponent } from './logout/logout.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
    {path: 'auth/login', component: LoginComponent, data: {title: 'Login'}},
    {path: 'auth/register', component: RegisterComponent, data: {title: 'Register'}},
    {path: 'auth/logout', component: LogoutComponent, data: {title: 'Logout'}},
    {path: 'auth/profile', component: ProfileComponent, data: {title: 'Profile'}}
];


export const AuthRoutingModule = RouterModule.forChild(routes);