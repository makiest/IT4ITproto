import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home/components/home-page/home-page.component';

export const appRoutes: Routes = [
    {
      path: 'auth',
      loadChildren: () => import('./pages/auth/auth-routes').then(m => m.authRoutes)
    },
    {
      path: '',
      component: HomePageComponent,
      loadChildren: () => import('./pages/home/home-routes').then(m => m.homeRoutes)
    },
    {
      path: '**',
      redirectTo: 'home'
    },
];
