import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import {FutureGoalsComponent} from './future-goals/future-goals.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'goals',
    component: FutureGoalsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
