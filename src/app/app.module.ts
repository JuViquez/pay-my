import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { UserListComponent } from './users/user-list/user-list.component';
import { CurrentBillComponent } from './bills/current-bill/current-bill.component';
import { BillLineListComponent } from './bill_lines/bill-line-list/bill-line-list.component';
import { MapComponent } from './business/map/map.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CurrentBillComponent,
    BillLineListComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC1nrxG7aYykMQZQuSSosEdhFAzBQswtXQ',
      libraries: ["places"],
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [],
  bootstrap: [AppComponent, UserListComponent]
})
export class AppModule { }
