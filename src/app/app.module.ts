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

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashboardCardsComponent,
    SideComponent,
    DashboardPanelComponent
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
