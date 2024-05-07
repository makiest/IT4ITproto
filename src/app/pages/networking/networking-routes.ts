import { Routes } from '@angular/router';
import { NetworkingPageComponent } from './components/networking-page/networking-page.component';
import { FirewallRulesPageComponent } from './components/firewall-rules-page/firewall-rules-page.component';
import { FirewallObjectsPageComponent } from './components/firewall-objects-page/firewall-objects-page.component';
import { WelcomeNetworkingComponent } from './components/welcome-networking/welcome-networking.component';

export const networkingRoutes: Routes = [
    {
      path: '',
      component: NetworkingPageComponent,
      children: [
        {
          path: '',
          redirectTo: 'welcomeNetworking',
          pathMatch: 'full'
        },
        {
          path: 'welcomeNetworking',
          component: WelcomeNetworkingComponent
        },
        {
          path: 'firewallRules',
          component: FirewallRulesPageComponent
        },
        {
          path: 'firewallObjects',
          component: FirewallObjectsPageComponent
        },
        {
          path:'**',
          component: WelcomeNetworkingComponent
        }
      ]
    },
    /* {
      path: 'firewallRules',
      component: FirewallRulesPageComponent
    }, */
    /* {
      path:'**',
      component: WelcomeNetworkingComponent
    } */
];