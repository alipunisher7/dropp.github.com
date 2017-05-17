import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { OperatorService } from './services';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardCardsComponent } from './dashboard-cards';
import { SideComponent } from './side/side.component';
import { DashboardPanelComponent } from './dashboard-panel';
import { HeaderComponent } from './header/header.component';
import { OnlineDriverComponent } from './online-driver/online-driver.component';
import { StatPanelComponent } from './stat-panel/stat-panel.component';
import { SubNavComponent } from './sub-nav/sub-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardCardsComponent,
    SideComponent,
    DashboardPanelComponent,
    HeaderComponent,
    OnlineDriverComponent,
    StatPanelComponent,
    SubNavComponent
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
