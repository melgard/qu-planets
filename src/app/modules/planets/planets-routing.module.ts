import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {PlanetsListComponent} from './pages/planets-list/planets-list.component';
import {PlanetsDetailComponent} from './pages/planets-detail/planets-detail.component';
import {MainLayoutComponent} from '../../layouts/main-layout/main-layout.component';

const routes: Routes = [{
    path: '',
    redirectTo: 'list'
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'list',
        component: PlanetsListComponent
      },
      {
        path: 'detail/:id',
        component: PlanetsDetailComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlanetsRoutingModule {

}
