import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { OperatorService } from './services';

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
    DashboardCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [OperatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
