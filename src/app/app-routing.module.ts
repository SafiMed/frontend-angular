import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule, RouterOutlet } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';
import { PreferredShopsComponent } from './preferred-shops/preferred-shops.component';

const routes:Routes = [
	{path: '', redirectTo: '/nearby-shops', pathMatch: 'full'},
	{path: 'nearby-shops', component: NearbyShopsComponent},
	{path: 'preferred-shops', component: PreferredShopsComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
