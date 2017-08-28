import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from 'services';

import { AppComponent } from 'components';
import { SendTaxiComponent } from 'components/send-taxi';
import { LoginComponent } from 'components/login';

import { DashboardPanel } from 'components/panels/dashboard';
import {
  getOnlineDriverResolver, getSettingResolver, getLowRateDriverResolver, getOnlineTripsResolver,
  getManufacturesResolver, getSearchRadiusResolver, getVouchersResolver, getDriversCountResolver, getOnlineTripsCountResolver,
  getTodayTripsCountResolver, getNewPassengersCountResolver, getPassengersCountResolver, getOrganizationsCountResolver,
  getBannedDriversResolver, getBannedPassengersResolver, getBugsResolver, getUnresolvedTicketsResolver, getDriversMostDebtsResolver,
  getproviderclaimResolver, getProvidersResolver
} from 'resolve/resolve';

import { DriversPanel, DriverCreditComponent, SearchDriversComponent, LowRateDriversComponent, ConfirmDriversComponent, OnlineDriverComponent } from 'components/panels/drivers';

import { PassengersPanel, SearchPassengersComponent, SubscribeRegisterComponent, SearchSubscribesComponent } from 'components/panels/passengers';

import { TripsPanel, SearchTripsComponent, OnlineTripsComponent } from 'components/panels/trips';

import { OrganizationsPanel, SearchOrganizationComponent } from 'components/panels/organizations';

import {
  ManagePanel,
  ManageCarsComponent,
  ManageManufacturesComponent,
  ManageTicketsComponent,
  ManageBannedUsersComponent,
  ManageVouchersComponent,
  TarrifComponent,
  ManageSearchRadiusComponent,
  BugsComponent,
  SystemSettingComponent,
  StateCityComponent,
  OperatorChangePasswordComponent
} from 'components/panels/manage';

import { OperatorsPanel, AddOperatorComponent, AddMasterComponent, SearchOperatorComponent } from 'components/panels/operators';

import { SupportPanel, ViewTicketsComponent } from 'components/panels/support';

import { ServicePanel, ActiveServicesComponent } from 'components/panels/services';

import { DriversDebtComponent, ProviderPanelComponent, ProviderDebtComponent, ShowProvidersComponent, ProviderSearchDriversComponent, AddProviderComponent } from 'components/panels/providers';
import { ReportPanelComponent, ReportComponent } from 'components/panels/reports';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'operator', canActivate: [AuthGuard], children: [
      {
        path: 'dashboard', component: DashboardPanel, resolve: {
          driversCount: getDriversCountResolver, onlineTripsCount: getOnlineTripsCountResolver,
          todayTripsCount: getTodayTripsCountResolver, newPassengersCount: getNewPassengersCountResolver,
          passengersCount: getPassengersCountResolver, organizationCount: getOrganizationsCountResolver
        }
      },
      {
        path: 'services', component: ServicePanel, children: [
          { path: 'actived-services', component: ActiveServicesComponent }
        ]
      },
      {
        path: 'drivers', component: DriversPanel, children: [
          { path: 'online', component: OnlineDriverComponent, resolve: { drivers: getOnlineDriverResolver } },
          { path: 'drivers-credit', component: DriverCreditComponent },
          { path: 'search', component: SearchDriversComponent },
          { path: 'low-rate', component: LowRateDriversComponent, resolve: { lowRateDriver: getLowRateDriverResolver } },
          { path: 'confirm-driver', component: ConfirmDriversComponent }
        ]
      },
      {
        path: 'passengers', component: PassengersPanel, children: [
          { path: 'search', component: SearchPassengersComponent },
          { path: 'subscribe-register', component: SubscribeRegisterComponent },
          { path: 'search-subscribe', component: SearchSubscribesComponent },
        ]
      },
      {
        path: 'trips', component: TripsPanel, children: [
          { path: 'search', component: SearchTripsComponent },
          { path: 'online', component: OnlineTripsComponent, resolve: { onlineTrips: getOnlineTripsResolver } },
        ]
      },
      {
        path: 'organizations', component: OrganizationsPanel, children: [
          { path: 'search', component: SearchOrganizationComponent }
        ]
      },
      {
        path: 'operators', component: OperatorsPanel, children: [
          { path: 'add', component: AddOperatorComponent },
          { path: 'add-master', component: AddMasterComponent },
          { path: 'search', component: SearchOperatorComponent },
        ]
      },
      // { path: 'admin', component: OrganizationsComponent },
      {
        path: 'admin', component: ManagePanel, children: [
          { path: 'manufactures', component: ManageManufacturesComponent, resolve: { manufactures: getManufacturesResolver } },
          { path: 'cars', component: ManageCarsComponent },
          { path: 'tickets', component: ManageTicketsComponent },
          { path: 'tarrif', component: TarrifComponent },
          { path: 'search-radius', component: ManageSearchRadiusComponent, resolve: { searchRadius: getSearchRadiusResolver } },
          { path: 'manage-vouchers', component: ManageVouchersComponent, resolve: { vouchers: getVouchersResolver } },
          { path: 'manage-banned-users', component: ManageBannedUsersComponent, resolve: { bannedDrivers: getBannedDriversResolver, bannedPassengers: getBannedPassengersResolver } },
          { path: 'bugs', component: BugsComponent, resolve: { bugs: getBugsResolver } },
          { path: 'system-setting', component: SystemSettingComponent, resolve: { settings: getSettingResolver } },
          { path: 'state-city', component: StateCityComponent },
          { path: 'change-pass', component: OperatorChangePasswordComponent },
        ]

      },
      { path: 'send-taxi', component: SendTaxiComponent },
      {
        path: 'support', component: SupportPanel, children: [
          { path: 'view-ticket', component: ViewTicketsComponent, resolve: { tickets: getUnresolvedTicketsResolver } }
        ]
      },
      {
        path: 'provider', component: ProviderPanelComponent, children:
        [
          { path: 'search', component: ProviderSearchDriversComponent },
          { path: 'show-providers', component: ShowProvidersComponent, resolve: { serviceProviders: getProvidersResolver } },
          { path: 'debt', component: DriversDebtComponent, resolve: { mddrivers: getDriversMostDebtsResolver } },
          { path: 'provider-debt', component: ProviderDebtComponent, resolve: { debt: getproviderclaimResolver } },
          { path: 'add-provider', component: AddProviderComponent },
        ]
      },
      {
        path: 'report', component: ReportPanelComponent, children:
        [
          { path: 'get-report', component: ReportComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
