import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.router';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { UserListComponent } from './users/user-list/user-list.component';
import { CurrentBillComponent } from './bills/current-bill/current-bill.component';
import { BillLineListComponent } from './bill_lines/bill-line-list/bill-line-list.component';
import { MapComponent } from './business/map/map.component';
import {LocationStrategy, HashLocationStrategy} from '@angular/common'

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
    routes,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC1nrxG7aYykMQZQuSSosEdhFAzBQswtXQ',
      libraries: ["places"],
    }),
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
