import { Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';

export const authRoutes: Routes = [
    {
        path: 'login',
        component: LoginPageComponent
    },
    {
        path: '**',
        redirectTo: '/auth/login'
    },
];