import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from './Shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AppRoutingModule } from './app-routing.module';
import { SizasportsComponent } from './sizasports/sizasports.component';
import { ActivitiesComponent } from './activities/activities.component';
import { ActivityOverviewComponent } from './activity-overview/activity-overview.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SizasportsComponent,
    ActivitiesComponent,
    ActivityOverviewComponent,
  ],
  imports: [
    BrowserModule,    
    BrowserAnimationsModule,
    SharedModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }