import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardPanelComponent } from './panels/dashboard-panel';
import { StatPanelComponent } from './panels/stat-panel';
import { OnlineDriverComponent } from './panels/stat-panel/online-driver';
import { SearchPassengersComponent } from './panels/stat-panel/search-passengers';
import { SearchDriversComponent } from './panels/stat-panel/search-drivers';
import { TripsComponent } from './panels/stat-panel/trips';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPanelComponent },
  {
    path: 'stats', component: StatPanelComponent, children: [
      { path: 'services', component: OnlineDriverComponent },
      { path: 'passengers', component: SearchPassengersComponent },
      { path: 'drivers', component: SearchDriversComponent },
      { path: 'trips', component: TripsComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
