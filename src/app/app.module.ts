import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD
import { HttpModule } from '@angular/http';

=======
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> pay-my/ace-branch
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
<<<<<<< HEAD
import { UserListComponent } from './users/user-list/user-list.component';
import { CurrentBillComponent } from './bills/current-bill/current-bill.component';
import { BillLineListComponent } from './bill_lines/bill-line-list/bill-line-list.component';
=======
import { MapComponent } from './business/map/map.component';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
>>>>>>> pay-my/ace-branch


@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    UserListComponent,
    CurrentBillComponent,
    BillLineListComponent
=======
    MapComponent
>>>>>>> pay-my/ace-branch
  ],
  imports: [
    BrowserModule,
    FormsModule,
<<<<<<< HEAD
    HttpModule,
=======
    ReactiveFormsModule,
>>>>>>> pay-my/ace-branch
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
