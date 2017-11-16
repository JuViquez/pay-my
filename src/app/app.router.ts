import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MapComponent } from './business/map/map.component';
import { CurrentBillComponent } from './bills/current-bill/current-bill.component';

export const router: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: MapComponent},
  { path: 'bill/:user_id/:business_id', component: CurrentBillComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
