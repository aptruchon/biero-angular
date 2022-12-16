import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeBiereComponent } from './liste-biere/liste-biere.component';
import { DetailBiereComponent } from './detail-biere/detail-biere.component';
import { BiereComponent } from './biere/biere.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';
import { HttpClientModule } from '@angular/common/http';
import { FormAjoutComponent } from './form-ajout/form-ajout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    AccueilComponent,
    ListeBiereComponent,
    DetailBiereComponent,
    BiereComponent,
    NonTrouveComponent,
    FormAjoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
