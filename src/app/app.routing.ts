import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import {FutureGoalsComponent} from './future-goals/future-goals.component';
import { ProjectplaceComponent } from './projectplace/projectplace.component';
import { ActivitiesDetailComponent } from './activities-detail/activities-detail.component'

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
  },
  {
    path: 'projectplace',
    component: ProjectplaceComponent
  },
  {
    path: 'projects/:id',
    component: ActivitiesDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
