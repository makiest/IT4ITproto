import { Routes } from '@angular/router';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';

export const homeRoutes: Routes = [
    {
      path: 'welcome',
      component: WelcomePageComponent
    },
    {
      path: 'computing',
      loadChildren:() => import('../computing/computing-routes').then(m => m.computingRoutes)
    },
    {
      path: 'networking',
      loadChildren:() => import('../networking/networking-routes').then(m => m.networkingRoutes)
    },
    {
      path: 'infrastructure',
      loadChildren:() => import('../infrastructure/infrastructure-routes').then(m => m.infrastructureRoutes)
    },
    {
      path: '**',
      redirectTo: 'welcome'
    },
];