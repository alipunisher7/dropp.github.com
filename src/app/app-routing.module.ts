import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidebarComponent} from './sidebar';
import {DashboardPanelComponent} from './dashboard-panel';
import { AppComponent } from './app.component';
import { StatPanelComponent } from './stat-panel';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPanelComponent },
  { path: 'stat-panel', component: StatPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
