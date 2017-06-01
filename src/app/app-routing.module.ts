import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardPanelComponent } from './panels/dashboard-panel';
import { StatPanelComponent } from './panels/stat-panel';
import { DriversComponent } from './panels/stat-panel/drivers';
import { PassengersComponent } from './panels/stat-panel/passengers';
import { TripsComponent } from './panels/stat-panel/trips';
import { OrganizationsComponent } from './panels/stat-panel/organizations';
import { ManagePanelComponent } from './panels/manage-panel';
import { SendTaxiComponent } from './panels/send-taxi';
import { SupportPanelComponent } from './panels/support-panel';
import { ManageServicesComponent } from './panels/manage-panel/manage-services';
import { ManageDriversComponent } from './panels/manage-panel/manage-drivers';
import { ManageVouchersComponent } from './panels/manage-panel/manage-vouchers';
import { ManageBannedUsersComponent } from './panels/manage-panel/manage-banned-users';
import { ManageOperatorsComponent } from './panels/manage-panel/manage-operators';
import { ServicesComponent } from './panels/stat-panel/services';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPanelComponent },
  {
    path: 'stats', component: StatPanelComponent, children: [
      // { path: 'services', component: DriversComponent },
      { path: 'passengers', component: PassengersComponent },
      { path: 'drivers', component: DriversComponent },
      { path: 'organizations', component: OrganizationsComponent },
      { path: 'trips', component: TripsComponent },
      { path: 'services', component: ServicesComponent },
    ]
  },
  {
    path: 'manage-panel', component: ManagePanelComponent, children: [
      { path: 'manage-services', component: ManageServicesComponent },
      { path: 'manage-drivers', component: ManageDriversComponent },
      { path: 'manage-operators', component: ManageOperatorsComponent },
      { path: 'manage-vouchers', component: ManageVouchersComponent },
      { path: 'manage-banned-users', component: ManageBannedUsersComponent }
    ]

  },
  { path: 'send-taxi', component: SendTaxiComponent },
  { path: 'support-panel', component: SupportPanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
