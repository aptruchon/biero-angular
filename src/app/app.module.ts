import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { EnteteComponent } from './entete/entete.component';
import { AccueilComponent } from './accueil/accueil.component';
import { ListeBiereComponent } from './liste-biere/liste-biere.component';
import { ModificationBiereComponent } from './modification-biere/modification-biere.component'; 
import { AjoutDeBiereComponent } from './ajout-de-biere/ajout-de-biere.component'; 
import { BiereComponent } from './biere/biere.component';
import { NonTrouveComponent } from './non-trouve/non-trouve.component';
import { DialogConfirmationComponent } from './dialog-confirmation/dialog-confirmation.component'; 

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatSortModule} from '@angular/material/sort';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    EnteteComponent,
    AccueilComponent,
    ListeBiereComponent,
    ModificationBiereComponent,
    BiereComponent,
    NonTrouveComponent,
    AjoutDeBiereComponent,
    DialogConfirmationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatInputModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
