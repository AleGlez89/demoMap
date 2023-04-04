import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapsComponent } from './modules/maps/components/mapsGlobal/maps.component';
import { LoginComponent } from './modules/mancivent/components/login/login.component';
import { CoreManciventComponent } from './modules/mancivent/components/core-mancivent/core-mancivent.component';
/*
const routes: Routes = [
  {
    path: '',
    redirectTo: 'checkin',
    pathMatch: 'prefix'
  },
  {
    path: 'checkin',
    loadChildren: () =>
      import('./pages/check-in/check-in.module').then(
        (module) => module.CheckInModule
      )
  },
  {
    path: 'b2t',
    loadChildren: () =>
      import('./pages/b2t/b2t.module').then((module) => module.LoginB2TModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/loyalty/loyalty.module').then(
        (module) => module.LoyaltyModule
      )
  },
  {
    path: '**',
    redirectTo: 'checkin'
  }
];
*/
const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: CoreManciventComponent,
  },
  { path: '**', redirectTo: 'login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
