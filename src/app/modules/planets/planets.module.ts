import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetsRoutingModule} from './planets-routing.module';
import {PlanetsListComponent} from './pages/planets-list/planets-list.component';
import {PlanetsDetailComponent} from './pages/planets-detail/planets-detail.component';
import {PlanetComponent} from './components/planet/planet.component';
import {MainLayoutComponent} from '../../layouts/main-layout/main-layout.component';
import {SharedModule} from '../shared/shared.module';
import { NoPlanetsComponent } from './components/no-planets/no-planets.component';


@NgModule({
  declarations: [
    MainLayoutComponent,
    PlanetsListComponent,
    PlanetsDetailComponent,
    PlanetComponent,
    NoPlanetsComponent
  ],
  imports: [
    CommonModule,
    PlanetsRoutingModule,
    SharedModule
  ]
})
export class PlanetsModule {
}
