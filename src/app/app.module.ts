import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ActivityListComponent } from './activity-list/activity-list.component';

import { ActivityService } from './services/activity.service';
import { MapService } from './services/map.service';

@NgModule({
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, ActivityListComponent],
  providers: [ActivityService, MapService],
  bootstrap: [AppComponent],
})
export class AppModule {}
