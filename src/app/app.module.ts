import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MdButtonModule,
  MdCheckboxModule,
  MdCard,
  MdCardTitle,
  MdCardSubtitle,
  MdCardContent
} from '@angular/material';

import {
  OperatorService,
  AdminService,
  AuthHttpService,
  NotificationService,
  AuthService
} from 'services';

import { AppRoutingModule } from 'app-routing.module';
import { AppComponent } from 'app.component';

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
  AdminPanel,
  InsertCarComponent,
  InsertManufactureComponent,
  ManageBannedUsersComponent,
  ManageTicketSubjectsComponent,
  InsertTicketSubjectComponent,
  ManageVouchersComponent,
  TarrifComponent
} from 'components/panels/admin';

import {
  DriversPanel,
  AllDriversCreditComponent,
  DriverAllInfoComponent,
  DriversCreditComponent,
  LowRateDriversComponent,
  ManageDriversComponent,
  OnlineDriverComponent,
  SearchDriversComponent
} from './components/panels/drivers';

import {
  PassengersPanel,
  PassengerAllInfoComponent,
  SearchPassengersComponent
} from './components/panels/passengers';

import {
  OrganizationsPanel,
  ViewOrganizationsComponent,
  ConfirmOrganizationsComponent
} from 'components/panels/organizations';

import {
  TripsPanel,
  TripsComponent
} from 'components/panels/trips';

import {
  ServicePanel,
  ActiveServicesComponent,
  SearchRadiusComponent,
  ServicesComponent
} from './components/panels/services';

import {
  OperatorsPanel,
  AddOperatorComponent,
  ManageOperatorsComponent
} from './components/panels/operators';

import { SupportPanel } from 'components/panels/support';


@NgModule({
  declarations: [
    AppComponent,
    DashboardPanel,
    DriversPanel,
    AdminPanel,
    ServicePanel,
    PassengersPanel,
    OrganizationsPanel,
    TripsPanel,
    HeaderComponent,
    OnlineDriverComponent,
    SubNavComponent,
    NavigationDrawerComponent,
    NavComponent,
    DashboardCardComponent,
    AddOperatorComponent,
    TarrifComponent,
    ActiveServicesComponent,
    InsertManufactureComponent,
    InsertCarComponent,
    SearchRadiusComponent,
    LowRateDriversComponent,
    SearchDriversComponent,
    SearchPassengersComponent,
    TripsComponent,
    DriversCreditComponent,
    ManageDriversComponent,
    ManageVouchersComponent,
    ManageBannedUsersComponent,
    SendTaxiComponent,
    SupportPanel,
    ManageOperatorsComponent,
    ServicesComponent,
    NotificationComponent,
    AllDriversCreditComponent,
    DriverAllInfoComponent,
    PassengerAllInfoComponent,
    ConfirmOrganizationsComponent,
    ViewOrganizationsComponent,
    ManageTicketSubjectsComponent,
    InsertTicketSubjectComponent,
    MdCard,
    MdCardContent,
    MdCardTitle,
    MdCardSubtitle,
    OperatorsPanel
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
    NotificationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
