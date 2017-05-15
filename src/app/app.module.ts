import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashbordCardsComponent } from './dashbord-cards/dashbord-cards.component';
import { SideComponent } from './side/side.component';
import { DashbordPanelComponent } from './dashbord-panel/dashbord-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    DashbordCardsComponent,
    SideComponent,
    DashbordPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
