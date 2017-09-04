import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

import { GOOGLE_MAP_API_TOKEN } from 'configs';
import {
  getOnlineDriverResolver, getSettingResolver, getLowRateDriverResolver, getOnlineTripsResolver,
  getManufacturesResolver, getSearchRadiusResolver, getVouchersResolver, getDriversCountResolver, getOnlineTripsCountResolver,
  getTodayTripsCountResolver, getNewPassengersCountResolver, getPassengersCountResolver, getOrganizationsCountResolver, getBannedDriversResolver,
  getBannedPassengersResolver, getBugsResolver, getUnresolvedTicketsResolver, getDriversMostDebtsResolver,
  getproviderclaimResolver, getProvidersResolver, getNewOrganizationsCountResolver
} from 'resolve/resolve';
import {
  AdminApi,
  COPApi,
  MasterApi,
  OperatorApi,
  ProviderApi
} from 'services/providers';

import {
  OperatorService,
  AdminService,
  AuthHttpService,
  NotificationService,
  AuthService,
  MasterService,
  CopService,
  NavigationService,
  ProviderService,
  AuthGuard
} from 'services';

import { AppRoutingModule } from 'app-routing.module';

import { AppComponent } from 'components';
import { HeaderComponent } from 'components/header';
import { NotificationComponent } from 'components/notification';
import { SendTaxiComponent } from 'components/send-taxi';

import {
  NavigationDrawerComponent,
  NavComponent,
  SubNavComponent
} from 'components/navigation-drawer';

import {
  DashboardPanel,
  DashboardCardComponent
} from 'components/panels/dashboard';

import {
  ManagePanel,
  ManageSearchRadiusComponent,
  ManageCarsComponent,
  ManageManufacturesComponent,
  ManageBannedUsersComponent,
  ManageTicketsComponent,
  ManageVouchersComponent,
  GenerateVoucherComponent,
  VoucherComponent,
  TarrifComponent,
  BugsComponent
} from 'components/panels/manage';

import {
  DriversPanel,
  DriverComponent,
  DriverCreditComponent,
  DriversCreditComponent,
  LowRateDriversComponent,
  ManageDriversComponent,
  OnlineDriverComponent,
  SearchDriversComponent
} from './components/panels/drivers';

import {
  PassengersPanel,
  PassengerComponent,
  SearchPassengersComponent,
  SearchSubscribesComponent,
} from './components/panels/passengers';

import {
  OrganizationsPanel,
  OrganizationsComponent,
  ConfirmOrganizationsComponent,
  SearchOrganizationComponent
} from 'components/panels/organizations';

import {
  TripsPanel,
  TripsComponent,
} from 'components/panels/trips';

import {
  ServicePanel,
  ActiveServicesComponent,
  ServicesComponent
} from './components/panels/services';

import {
  OperatorsPanel,
  AddOperatorComponent,
  ManageOperatorsComponent,
  SearchOperatorComponent,
  OperatorComponent
} from './components/panels/operators';

import {
  SupportPanel,
  ViewTicketsComponent
} from 'components/panels/support';

import { SearchTripsComponent } from './components/panels/trips/search/search-trips.component';
import { SubscribeRegisterComponent } from './components/panels/passengers/subscribe-register/subscribe-register.component';
import { AddMasterComponent } from './components/panels/operators/add-master/add-master.component';
import { InputComponent } from './components/utils/input/input.component';
import { InputDirective } from './directives/input.directive';
import { SystemSettingComponent } from './components/panels/manage/system-setting/system-setting.component';
import { StateCityComponent } from './components/panels/manage/state-city/state-city.component';
import { ConfirmDriversComponent } from './components/panels/drivers/confirm/confirm-drivers.component';
import { DriversDebtComponent } from './components/panels/providers/drivers-debt/drivers-debt.component';
import { ProviderPanelComponent } from './components/panels/providers/provider-panel.component';
import { ReportPanelComponent } from './components/panels/reports/report-panel.component';
import { ReportComponent } from './components/panels/reports/report/report.component';
import { OnlineTripsComponent } from './components/panels/trips/online/online-trips.component';
import { ProviderDebtComponent } from './components/panels/providers/provider-debt/provider-debt.component';
import { ShowProvidersComponent } from './components/panels/providers/show-providers/show-providers.component';
import { ProviderSearchDriversComponent } from './components/panels/providers/search/provider-search-drivers.component';
import { AddProviderComponent } from './components/panels/providers/add/add-provider.component';
import { LoginComponent } from './components/login/login.component';
import { OperatorChangePasswordComponent } from './components/panels/manage/operator-change-password/operator-change-password.component';
import { ReloadComponent } from './components/panels/manage/reload/reload.component';
import { AccountSettingComponent } from './components/account-setting/account-setting.component';
import { VehicleDistanceComponent } from './components/panels/drivers/vehicle-distance/vehicle-distance.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    NavigationDrawerComponent,
    NavComponent,
    SubNavComponent,

    DashboardPanel,
    DashboardCardComponent,

    DriversPanel,
    OnlineDriverComponent,
    LowRateDriversComponent,
    DriverCreditComponent,
    DriversCreditComponent,
    SearchDriversComponent,

    ManagePanel,
    ManageManufacturesComponent,
    ManageCarsComponent,
    ManageSearchRadiusComponent,
    ManageDriversComponent,
    ManageVouchersComponent,
    ManageBannedUsersComponent,
    ManageOperatorsComponent,
    ManageTicketsComponent,
    TarrifComponent,
    BugsComponent,

    ServicePanel,
    ActiveServicesComponent,

    PassengersPanel,
    PassengerComponent,
    SearchSubscribesComponent,

    OrganizationsPanel,
    OrganizationsComponent,
    ConfirmOrganizationsComponent,
    SearchOrganizationComponent,

    AddOperatorComponent,
    SearchOperatorComponent,
    OperatorComponent,

    TripsPanel,
    OperatorsPanel,

    SearchPassengersComponent,
    TripsComponent,
    SendTaxiComponent,
    ServicesComponent,
    NotificationComponent,
    DriverComponent,

    SupportPanel,
    ViewTicketsComponent,

    SearchTripsComponent,
    SubscribeRegisterComponent,
    AddMasterComponent,
    InputComponent,
    InputDirective,
    GenerateVoucherComponent,
    VoucherComponent,
    SystemSettingComponent,
    StateCityComponent,
    ConfirmDriversComponent,
    DriversDebtComponent,
    ProviderPanelComponent,
    ReportPanelComponent,
    ReportComponent,
    OnlineTripsComponent,
    ProviderDebtComponent,
    ShowProvidersComponent,
    ProviderSearchDriversComponent,
    AddProviderComponent,
    LoginComponent,
    OperatorChangePasswordComponent,
    ReloadComponent,
    AccountSettingComponent,
    VehicleDistanceComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: GOOGLE_MAP_API_TOKEN,
      libraries: ['places']
    })
  ],

  providers: [
    OperatorService,
    AdminService,
    AuthHttpService,
    AuthService,
    NotificationService,
    MasterService,
    CopService,
    NavigationService,
    ProviderService,
    AdminApi,
    MasterApi,
    COPApi,
    OperatorApi,
    ProviderApi,
    AuthGuard,
    getSettingResolver,
    getOnlineDriverResolver,
    getLowRateDriverResolver,
    getOnlineTripsResolver,
    getManufacturesResolver,
    getSearchRadiusResolver,
    getVouchersResolver,
    getDriversCountResolver,
    getOnlineTripsCountResolver,
    getTodayTripsCountResolver,
    getNewPassengersCountResolver,
    getPassengersCountResolver,
    getOrganizationsCountResolver,
    getBannedDriversResolver,
    getBannedPassengersResolver,
    getBugsResolver,
    getUnresolvedTicketsResolver,
    getDriversMostDebtsResolver,
    getproviderclaimResolver,
    getProvidersResolver,
    getNewOrganizationsCountResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
