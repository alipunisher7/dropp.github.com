import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from 'components';
import { SendTaxiComponent } from 'components/send-taxi';

import { DashboardPanel } from 'components/panels/dashboard';

import { DriversPanel } from 'components/panels/drivers';

import { PassengersPanel } from 'components/panels/passengers';

import { TripsPanel } from 'components/panels/trips';

import { OrganizationsPanel } from 'components/panels/organizations';

import {
  AdminPanel,
  InsertCarComponent,
  InsertManufactureComponent,
  InsertTicketSubjectComponent,
  ManageBannedUsersComponent,
  ManageTicketSubjectsComponent,
  ManageVouchersComponent,
  TarrifComponent
} from 'components/panels/admin';

import { OperatorsPanel } from 'components/panels/operators';

import { SupportPanel } from 'components/panels/support';

import { ServicePanel } from 'components/panels/services';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardPanel },
  { path: 'services', component: ServicePanel },
  { path: 'drivers', component: DriversPanel },
  { path: 'passengers', component: PassengersPanel },
  { path: 'trips', component: TripsPanel },
  { path: 'organizations', component: OrganizationsPanel },
  { path: 'operators', component: OperatorsPanel },
  // { path: 'admin', component: OrganizationsComponent },
  {
    path: 'admin', component: AdminPanel, children: [
      { path: 'manage-vouchers', component: ManageVouchersComponent },
      { path: 'manage-banned-users', component: ManageBannedUsersComponent }
    ]

  },
  { path: 'send-taxi', component: SendTaxiComponent },
  { path: 'support', component: SupportPanel }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
