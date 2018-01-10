import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http' // Import the Module
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NearbyShopsComponent } from './nearby-shops/nearby-shops.component';
import { PreferredShopsComponent } from './preferred-shops/preferred-shops.component';

import { AppRoutingModule } from'./app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ShopService } from './services/shop.service';
import { MessageService } from './services/message.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NearbyShopsComponent,
    PreferredShopsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    NgbModule.forRoot(),
    HttpClientModule, // Import The Module HttpClient
    HttpModule
  ],
  providers: [
    ShopService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
