import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
  { path: 'runs', component: ActivityListComponent },
  { path: 'run/:id', component: MapComponent },
  { path: '', redirectTo: '/runs', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
