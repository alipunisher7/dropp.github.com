import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { OperatorService, AdminService } from './services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';

import { NavigationDrawerComponent } from './navigation-drawer/navigation-drawer.component';
import { NavComponent } from './navigation-drawer/nav';
import { SubNavComponent } from './navigation-drawer/nav/sub-nav';

import { DashboardPanelComponent } from './panels/dashboard-panel';

import { StatPanelComponent } from './panels/stat-panel';
import { OnlineDriverComponent } from './panels/stat-panel/drivers/online-driver';
import { DashboardCardComponent } from './panels/dashboard-panel/dashboard-card/dashboard-card.component';
import { AddMOpComponent } from './admin/add-mop/add-mop.component';
import { TarrifComponent } from './panels/manage-panel/manage-services/tarrif/tarrif.component';
import { ActiveServicesComponent } from './panels/manage-panel/manage-services/active-services/active-services.component';
import { InsertManufactureComponent } from './admin/insert-manufacture/insert-manufacture.component';
import { InsertCarComponent } from './admin/insert-car/insert-car.component';
import { SearchRadiusComponent } from './panels/manage-panel/manage-services/search-radius/search-radius.component';
import { LowRateDriversComponent } from './panels/stat-panel/drivers/low-rate-drivers/low-rate-drivers.component';
import { SearchDriversComponent } from './panels/stat-panel/drivers/search-drivers/search-drivers.component';
import { SearchPassengersComponent } from './panels/stat-panel/passengers/search-passengers/search-passengers.component';
import { TripsComponent } from './panels/stat-panel/trips/trips.component';
import { DriversCreditComponent } from './panels/stat-panel/drivers/drivers-credit/drivers-credit.component';
import { DriversComponent } from './panels/stat-panel/drivers/drivers.component';
import { PassengersComponent } from './panels/stat-panel/passengers/passengers.component';
import { OrganizationsComponent } from './panels/stat-panel/organizations/organizations.component';
import { ManagePanelComponent } from './panels/manage-panel/manage-panel.component';
import { ManageDriversComponent } from './panels/manage-panel/manage-drivers/manage-drivers.component';
import { ManageServicesComponent } from './panels/manage-panel/manage-services/manage-services.component';
import { ManageVouchersComponent } from './panels/manage-panel/manage-vouchers/manage-vouchers.component';
import { ManageBannedUsersComponent } from './panels/manage-panel/manage-banned-users/manage-banned-users.component';
import { SendTaxiComponent } from './panels/send-taxi/send-taxi.component';
import { SupportPanelComponent } from './panels/support-panel/support-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPanelComponent,
    HeaderComponent,
    OnlineDriverComponent,
    StatPanelComponent,
    SubNavComponent,
    NavigationDrawerComponent,
    NavComponent,
    DashboardCardComponent,
    AddMOpComponent,
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
    DriversComponent,
    PassengersComponent,
    OrganizationsComponent,
    ManagePanelComponent,
    ManageDriversComponent,
    ManageServicesComponent,
    ManageVouchersComponent,
    ManageBannedUsersComponent,
    SendTaxiComponent,
    SupportPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [OperatorService, AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
