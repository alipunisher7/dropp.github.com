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
import { OnlineDriverComponent } from './panels/stat-panel/online-driver';
import { DashboardCardComponent } from './panels/dashboard-panel/dashboard-card/dashboard-card.component';
import { AddMOpComponent } from './admin/add-mop/add-mop.component';
import { TarrifComponent } from './admin/tarrif/tarrif.component';
import { ActiveServicesComponent } from './admin/active-services/active-services.component';
import { InsertManufactureComponent } from './admin/insert-manufacture/insert-manufacture.component';
import { InsertCarComponent } from './admin/insert-car/insert-car.component';
import { SearchRadiusComponent } from './admin/search-radius/search-radius.component';
import { LowRateDriversComponent } from './panels/stat-panel/low-rate-drivers/low-rate-drivers.component';
import { SearchDriversComponent } from './panels/stat-panel/search-drivers/search-drivers.component';
import { SearchPassengersComponent } from './panels/stat-panel/search-passengers/search-passengers.component';

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
    SearchPassengersComponent
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
