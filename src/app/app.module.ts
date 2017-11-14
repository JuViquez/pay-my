import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { UserListComponent } from './users/user-list/user-list.component';
import { CurrentBillComponent } from './bills/current-bill/current-bill.component';
import { BillLineListComponent } from './bill_lines/bill-line-list/bill-line-list.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CurrentBillComponent,
    BillLineListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyC1nrxG7aYykMQZQuSSosEdhFAzBQswtXQ'
    })
  ],
  providers: [],
  bootstrap: [AppComponent, UserListComponent]
})
export class AppModule { }
