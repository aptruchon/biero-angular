import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeBiereComponent } from './liste-biere/liste-biere.component';
import { DetailBiereComponent } from './detail-biere/detail-biere.component';
import { BiereComponent } from './biere/biere.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    AccueilComponent,
    ListeBiereComponent,
    DetailBiereComponent,
    BiereComponent,
    NonTrouveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
