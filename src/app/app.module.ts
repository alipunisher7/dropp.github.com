import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  AdminApi,
  COPApi,
  MasterApi,
  OperatorApi
} from 'services/providers';

import {
  OperatorService,
  AdminService,
  AuthHttpService,
  NotificationService,
  AuthService,
  MasterService,
  CopService
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
  TarrifComponent
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
  SearchPassengersComponent
} from './components/panels/passengers';

import {
  OrganizationsPanel,
  OrganizationsComponent,
  ConfirmOrganizationsComponent
} from 'components/panels/organizations';

import {
  TripsPanel,
  TripsComponent
} from 'components/panels/trips';

import {
  ServicePanel,
  ActiveServicesComponent,
  ServicesComponent
} from './components/panels/services';

import {
  OperatorsPanel,
  AddOperatorComponent,
  ManageOperatorsComponent
} from './components/panels/operators';

import { SupportPanel } from 'components/panels/support';
import { SearchTripsComponent } from './components/panels/trips/search/search-trips.component';
import { SubscribeRegisterComponent } from './components/panels/passengers/subscribe-register/subscribe-register.component';
import { AddMasterComponent } from './components/panels/operators/add-master/add-master.component';
import { SearchOrganizationComponent } from './components/panels/organizations/search/search-organization.component';


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

    ServicePanel,
    ActiveServicesComponent,

    PassengersPanel,
    PassengerComponent,

    OrganizationsPanel,
    OrganizationsComponent,
    ConfirmOrganizationsComponent,

    AddOperatorComponent,

    TripsPanel,
    OperatorsPanel,

    SearchPassengersComponent,
    TripsComponent,
    SendTaxiComponent,
    SupportPanel,
    ServicesComponent,
    NotificationComponent,
    DriverComponent,

    SearchTripsComponent,
    SubscribeRegisterComponent,
    AddMasterComponent,
    SearchOrganizationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    OperatorService,
    AdminService,
    AuthHttpService,
    AuthService,
    NotificationService,
    MasterService,
    CopService,
    AdminApi,
    MasterApi,
    COPApi,
    OperatorApi
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
