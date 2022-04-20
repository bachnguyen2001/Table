import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BirthdayPipe } from './birthday.pipe';
import { PhonePipe } from './phone.pipe';
import { FormsModule } from '@angular/forms';
import { LineChartComponent } from './region/line-chart/line-chart.component';
import { MapComponent } from './region/map/map.component';
import { RegionalListComponent } from './region/regional-list/regional-list.component';
import { WorldwideComponent } from './worldwide/worldwide.component';


@NgModule({
  declarations: [
    AppComponent,
    BirthdayPipe,
    PhonePipe,
    LineChartComponent,
    MapComponent,
    RegionalListComponent,
    WorldwideComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
